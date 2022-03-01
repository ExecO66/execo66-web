import { SectionHeader } from "../../components/SectionHeader";
import { MainLayout } from "../../components/MainLayout";
import { Path } from "../../components/Path";
import { NextPage } from "next";
import {
  BaseDropdownList,
  BaseDropdownListProps,
} from "../../components/BaseDropdownList";
import { Assignment, AssignmentProps } from "./Assignment";
import { useScreenType } from "../../hooks/useScreenType";
import { ISOStringToDate, jsonFetchWrapper } from "../../utils";
import { apiBaseUrl } from "../../constants";
import { useEffect, useState } from "react";

type AssignmentData = {
  assignmentId: string;
  title: string;
  description: string;
  dueDate: Date;
  recentSubmissionId: string;
  availableUntil: Date;
  teacherInfo: {
    username: string;
    profilePicture: string;
  };
};

export const PageAssigmentsList: NextPage = () => {
  const [assignments, setAssignments] = useState<AssignmentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  const { isMobile } = useScreenType();

  useEffect(() => {
    jsonFetchWrapper<{
      assignments: (AssignmentData & {
        dueDate: string;
        availableUntil: string;
      })[];
    }>(`${apiBaseUrl}/student-assignment`, {
      method: "GET",
      credentials: "include",
    }).then(({ data, error }) => {
      if (data !== null && error === null) {
        setAssignments(
          data.assignments.map(({ dueDate, availableUntil, ...a }) => ({
            dueDate: ISOStringToDate(dueDate),
            availableUntil: ISOStringToDate(availableUntil),
            ...a,
          }))
        );
        setLoading(false);
        setErr(false);
      } else {
        setErr(true);
        setLoading(false);
      }
    });
  }, []);

  return (
    <MainLayout>
      <section className="w-full h-full bg-neutral-100 prevent-sb-repos">
        <div className="mx-[3%] my-6">
          <div className="">
            <Path path="Assignments /" />
          </div>
          <div className="w-3/4 mt-7">
            <SectionHeader text="Assignments" />
          </div>
          <div className="mt-12">
            <div className="pb-12">
              <BaseDropdownList
                {...({
                  title: "Incomplete",
                  list: assignments.filter((x) => new Date() < x.dueDate),
                  ListElement: Assignment,
                  open: true,
                } as BaseDropdownListProps<AssignmentProps>)}
              />
            </div>
            <div className="pb-12">
              <BaseDropdownList
                {...({
                  title: "Overdue",
                  list: assignments.filter(
                    (x) =>
                      new Date() > x.dueDate && new Date() < x.availableUntil
                  ),
                  ListElement: Assignment,
                  open: true,
                } as BaseDropdownListProps<AssignmentProps>)}
              />
            </div>
            <div className="pb-16">
              <BaseDropdownList
                {...({
                  title: "Past",
                  list: assignments.filter(
                    (x) =>
                      new Date() > x.dueDate && new Date() > x.availableUntil
                  ),
                  ListElement: Assignment,
                  open: isMobile,
                } as BaseDropdownListProps<AssignmentProps>)}
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
