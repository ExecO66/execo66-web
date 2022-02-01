import { DateBox } from "components/DateBox";
import { HeaderText } from "components/HeaderText";
import { SvgChevronDown } from "icons/ChevronDown";
import { SvgWarning } from "icons/Warning";
import { FC, useState } from "react";

export const SubmittedAssignmentsList: FC = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="w-full h-full bg-primary px-20 py-10">
      <div>
        <div className="flex items-center gap-3">
          <SvgChevronDown
            className={`w-4 h-4 transition-all duration-300 ${
              open ? "" : "-rotate-90"
            }`}
            onClick={() => setOpen(!open)}
          />
          <h1 className="text-contrast font-semibold text-2xl">
            Submitted Assignments
          </h1>
        </div>
        <div
          className="w-full bg-secondary my-4"
          style={{ height: "3px" }}
        ></div>
      </div>
      <article
        className={`w-2/3 py-5 flex flex-col gap-8 overflow-hidden ${
          open ? "" : "max-h-0 py-0"
        }`}
      >
        {[1, 2, 3, 4].map((_, i) => (
          <SubmittedAssignment key={i} />
        ))}
      </article>
    </div>
  );
};

const SubmittedAssignment: FC = () => {
  return (
    <div className="flex h-24 gap-5">
      <DateBox
        title="Finished"
        dateStr="Jan 5"
        dateProps={{ className: "text-green-500" }}
        className="shadow-lg bg-white rounded-lg p-7 flex flex-col items-center justify-center gap-2"
      />
      <div
        className={
          "w-full h-full shadow-lg bg-white rounded-lg p-10 flex items-center justify-between"
        }
      >
        <h1 className="font-semibold text-xl">
          HW #13 WS on 7.1 (pp 3)--7 problems
        </h1>
        <div>
          <div className="inline-block mr-3 w-10 h-10 bg-punch rounded-full"></div>
          <div className="inline-block">
            <h3 className="font-medium">X.Herman</h3>
            <h3 className="text-gray-400 text-xs">CS Teacher</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
