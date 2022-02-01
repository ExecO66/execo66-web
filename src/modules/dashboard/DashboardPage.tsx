import { Nav } from "components/Nav";
import { NextPage } from "next";
import { AssignmentsPanelWrap } from "./AssignmentsPanelWrap";

export const DashboardPage: NextPage = () => {
  return (
    <div className="w-full h-full bg-primary relative flex">
      <Nav />
      <AssignmentsPanelWrap />
    </div>
  );
};
