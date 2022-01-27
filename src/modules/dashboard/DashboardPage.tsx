import { Nav } from "components/Nav";
import { NextPage } from "next";

export const DashboardPage: NextPage = () => {
  return (
    <div className="w-full h-full bg-primary relative">
      <Nav />
    </div>
  );
};
