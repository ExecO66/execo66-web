import { FC } from "react";
import { MainGrid } from "./MainGrid";
import { Topbar } from "./Topbar";

export const MainLayout: FC = ({ children }) => {
  return (
    <div className="w-full h-screen overflow-y-hidden flex flex-col">
      <Topbar />
      <div className="w-full h-full">
        <MainGrid>{children}</MainGrid>
      </div>
    </div>
  );
};
