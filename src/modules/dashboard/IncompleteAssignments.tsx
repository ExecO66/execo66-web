import { DateBox } from "components/DateBox";
import { HeaderText } from "components/HeaderText";
import { SvgWarning } from "icons/Warning";
import { FC } from "react";

export const IncompleteAssignmentsList: FC = () => {
  return (
    <div className="w-full h-full bg-primary px-20 py-10">
      <HeaderText>Incomplete Assignments</HeaderText>
      <div className="mt-10 mb-5">
        <IncompleteLabel />
      </div>
      <article className="w-2/3 p-5 flex flex-col gap-5">
        {[1, 2, 3, 4].map((_, i) => (
          <IncompleteAssignment key={i} />
        ))}
      </article>
    </div>
  );
};

const IncompleteAssignment: FC = () => {
  return (
    <div className="flex h-24 gap-10">
      <DateBox
        title="Due"
        dateStr="Jan 5"
        dateProps={{ className: "text-red-500" }}
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

const IncompleteLabel: FC = () => (
  <div className="w-48 h-10 bg-yellow-light rounded-3xl px-5 flex items-center gap-5">
    <SvgWarning className="w-7 h-7" />
    <h3 className="text-yellow-dark">Incomplete</h3>
  </div>
);
