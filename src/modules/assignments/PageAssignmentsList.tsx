import { SectionHeader } from "../../components/SectionHeader";
import { MainLayout } from "../../components/MainLayout";
import { Path } from "../../components/Path";
import { NextPage } from "next";
import {
  BaseDropdownList,
  BaseDropdownListProps,
} from "../../components/BaseDropdownList";
import { Assignment, AssignmentProps } from "./Assignment";
import { ISOStringToDate, jsonFetchWrapper } from "../../utils";
import { apiBaseUrl } from "../../constants";
import { useEffect, useState } from "react";

type AssignmentData = {
  assignmentId: string;
  title: string;
  description: string;
  dueDate: Date;
  availableUntil: Date;
  teacherInfo: {
    username: string;
    profilePicture: string;
  };
  submissionInfo?: {
    submissionId: string;
    submissionDate: Date;
  };
};

export const PageAssigmentsList: NextPage = () => {
  const [assignments, setAssignments] = useState<AssignmentData[]>([]);
  const [_loading, setLoading] = useState(true);
  const [_err, setErr] = useState(false);

  useEffect(() => {
    jsonFetchWrapper<{
      assignments: (AssignmentData & {
        dueDate: string;
        availableUntil: string;
        submissionInfo?: {
          submissionId: string;
          submissionDate: string;
        };
      })[];
    }>(`${apiBaseUrl}/student-assignment`, {
      method: "GET",
      credentials: "include",
    }).then(({ data, error }) => {
      if (data !== null && error === null) {
        setAssignments(
          data.assignments.map(
            ({ dueDate, availableUntil, submissionInfo, ...a }) => ({
              dueDate: ISOStringToDate(dueDate),
              availableUntil: ISOStringToDate(availableUntil),
              ...(submissionInfo?.submissionDate && {
                submissionInfo: {
                  ...submissionInfo,
                  submissionDate: ISOStringToDate(
                    submissionInfo.submissionDate
                  ),
                },
              }),
              ...a,
            })
          )
        );
        setLoading(false);
        setErr(false);
      } else {
        setErr(true);
        setLoading(false);
      }
    });
  }, []);

  /*
    active assignments:
      - still available
    past assignments:
      - past available 
    
    incomplete / submitted
  */

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
                  title: "Active",
                  list: assignments
                    .filter((x) => new Date() <= x.availableUntil)

                    .sort((a, b) => {
                      if (
                        typeof a.assignmentId == "undefined" &&
                        typeof b.assignmentId == "undefined"
                      ) {
                        return 0;
                      } else if (typeof a.assignmentId == "undefined") {
                        return -1;
                      } else {
                        return 1;
                      }
                    }),
                  ListElement: Assignment,
                  open: true,
                  dataTest: "assignment:list:active",
                } as BaseDropdownListProps<AssignmentProps>)}
              />
            </div>
            <div className="pb-16">
              <BaseDropdownList
                {...({
                  title: "Past",
                  list: assignments.filter(
                    (x) => new Date() > x.availableUntil
                  ),
                  ListElement: Assignment,
                  open: true,
                  dataTest: "assignment:list:past",
                } as BaseDropdownListProps<AssignmentProps>)}
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
