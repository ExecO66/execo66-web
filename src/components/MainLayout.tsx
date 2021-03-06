import { useScreenType } from "../hooks/useScreenType";
import { FC } from "react";
import { ClientRender } from "./ClientRender";
import { MainGrid } from "./MainGrid";
import { MobileNav, MobileNavPlaceholder } from "./MobileNav";
import { Nav } from "./Nav";
import { Topbar } from "./Topbar";

export const MainLayout: FC = ({ children }) => {
  const { isMobile } = useScreenType();

  return (
    <div className="w-full h-screen overflow-y-hidden flex flex-col">
      {isMobile && <Topbar />}
      <div className="w-full h-full">
        <MainGrid>
          {!isMobile ? <Nav /> : <MobileNav />}
          <ClientRender>{children}</ClientRender>
          {isMobile && <MobileNavPlaceholder />}
        </MainGrid>
      </div>
    </div>
  );
};
