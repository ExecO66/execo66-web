import { EclipseProfilePicture } from "../../components/EclipseProfilePicture";
import { SvgChevronDown } from "../../icons/ChevronDown";
import Link from "next/link";
import { FC } from "react";
import * as utils from "../../utils";
import { formatTwelveHHMin } from "../../utils";

export interface AssignmentProps {
  assignmentId: string;
  title: string;
  dueDate: Date;
  recentSubmissionId?: string;
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
  recentSubmissionId,
}) => {
  return (
    <Link href={`/assignments/${assignmentId}`} passHref>
      <div className="w-full max-w-[900px] px-5 py-5 bg-[#ffffff] hover:bg-primary-100 shadow-md rounded-md grid grid-cols-[1fr_50px] items-center cursor-pointer">
        <div className="w-5/6 grid lg:grid-rows-2 gap-3">
          <div className="w-full overflow-hidden grid lg:grid-cols-[auto_1fr] gap-2 lg:gap-8 items-center">
            <h1 className="font-semibold text-xl overflow-hidden whitespace-nowrap overflow-ellipsis">
              {title}
            </h1>
            <div
              className={`w-24 h-6 rounded-2xl text-sm font-semibold text-neutral-50 flex items-center justify-center ${
                recentSubmissionId != undefined
                  ? "bg-valid-green"
                  : "bg-valid-red"
              }`}
            >
              {recentSubmissionId != undefined ? "Submitted" : "Incomplete"}
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between lg:items-center">
            <div className="flex flex-col sm:flex-row lg:items-center">
              <span className="mr-3 text-sm text-neutral-500 font-medium whitespace-nowrap">
                Due
              </span>
              <span className="text-subprimary-400 font-medium whitespace-nowrap">{`${utils.getMonthAbbr(
                dueDate
              )} ${dueDate.getDate()} at ${formatTwelveHHMin(dueDate)}`}</span>
            </div>

            <div className="flex flex-col sm:flex-row lg:items-center">
              <span className="mr-3 text-sm text-neutral-500 font-medium whitespace-nowrap">
                Available until
              </span>
              <span className="text-subprimary-400 font-medium whitespace-nowrap">{`${utils.getMonthAbbr(
                availableUntil
              )} ${availableUntil.getDate()} at ${formatTwelveHHMin(
                dueDate
              )}`}</span>
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
    </Link>
  );
};
