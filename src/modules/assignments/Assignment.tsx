import { EclipseProfilePicture } from "../../components/EclipseProfilePicture";
import { SvgChevronDown } from "../../icons/ChevronDown";
import Link from "next/link";
import { FC } from "react";
import * as utils from "../../utils";

export interface AssignmentProps {
  assignmentId: string;
  title: string;
  dueDate: Date;
  recentSubmissionId: string;
  availableUntil: Date;
  teacherInfo: {
    username: string;
    profilePicture: string;
  };
}

export const Assignment: FC<AssignmentProps> = ({
  title,
  assignmentId,
  dueDate,
  availableUntil,
  teacherInfo,
}) => {
  return (
    <Link href={`/assignments/${assignmentId}`}>
      <a>
        <div className="w-5/6 max-w-[680px] px-5 py-5 bg-[#ffffff] hover:bg-primary-100 shadow-md rounded-md grid grid-cols-[1fr_50px] items-center">
          <div className="w-5/6 grid sm:grid-rows-2 gap-3">
            <div className="w-full overflow-hidden">
              <h1 className="font-semibold text-xl overflow-hidden whitespace-nowrap overflow-ellipsis">
                {title}
              </h1>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between sm:items-center">
              <div>
                <span className="mr-3 text-sm text-neutral-500 font-medium whitespace-nowrap">
                  Due
                </span>
                <span className="text-subprimary-400 font-medium whitespace-nowrap">{`${utils.getMonthAbbr(
                  dueDate
                )} ${dueDate.getDate()}`}</span>
              </div>

              <div>
                <span className="mr-3 text-sm text-neutral-500 font-medium whitespace-nowrap">
                  Available until
                </span>
                <span className="text-subprimary-400 font-medium whitespace-nowrap">{`${utils.getMonthAbbr(
                  availableUntil
                )} ${availableUntil.getDate()}`}</span>
              </div>

              <div className="flex items-center gap-3">
                <EclipseProfilePicture
                  className="w-7 h-7 inline-block"
                  imgUrl="https://picsum.photos/200/200"
                  alt=""
                />
                <span className="font-medium text-neutral-900 text-sm">
                  {teacherInfo.username}
                </span>
              </div>
            </div>
          </div>

          <div className="1/6">
            <SvgChevronDown className="-rotate-90 w-4 h-4" />
          </div>
        </div>
      </a>
    </Link>
  );
};
