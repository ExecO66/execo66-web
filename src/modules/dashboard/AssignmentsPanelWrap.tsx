import { FC } from "react";
import { IncompleteAssignmentsList } from "./IncompleteAssignments";
import { SubmittedAssignmentsList } from "./SubmittedAssignments";

export const AssignmentsPanelWrap: FC = () => (
  <div className="flex flex-col w-full">
    <IncompleteAssignmentsList />
    <SubmittedAssignmentsList />
  </div>
);
