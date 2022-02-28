import { SectionHeader } from "components/SectionHeader";
import { MainLayout } from "components/MainLayout";
import { Path } from "components/Path";
import { NextPage } from "next";
import {
  BaseDropdownList,
  BaseDropdownListProps,
} from "components/BaseDropdownList";
import { Assignment, AssignmentProps } from "./Assignment";
import { useScreenType } from "hooks/useScreenType";
import { ISOStringToDate } from "utils";

export const PageAssigmentsList: NextPage = () => {
  const assignments = [
    {
      title: "Overdue 1",
      availableUntil: ISOStringToDate("2022-03-05T19:03:20-06:00"),
      due: ISOStringToDate("2022-03-01T19:03:20-06:00"),
      id: "1",
      teacherInfo: {
        profilePicture: "",
        username: "Mr. Herman",
      },
    },
    {
      title: "Overdue 1",
      availableUntil: ISOStringToDate("2022-02-28T19:03:20-06:00"),
      due: ISOStringToDate("2022-02-26T19:03:20-06:00"),
      id: "1",
      teacherInfo: {
        profilePicture: "",
        username: "Mr. Herman",
      },
    },
    {
      title: "Overdue 1",
      availableUntil: ISOStringToDate("2022-02-25T19:03:20-06:00"),
      due: ISOStringToDate("2022-02-20T19:03:20-06:00"),
      id: "1",
      teacherInfo: {
        profilePicture: "",
        username: "Mr. Herman",
      },
    },
  ] as AssignmentProps[];

  const { isMobile } = useScreenType();

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
                  list: assignments.filter((x) => new Date() < x.due),
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
                    (x) => new Date() > x.due && new Date() < x.availableUntil
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
                    (x) => new Date() > x.due && new Date() > x.availableUntil
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
