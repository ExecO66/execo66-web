import { useScreenType } from "hooks/useScreenType";
import { FC } from "react";
import { MainGrid } from "./MainGrid";
import { MobileNav } from "./MobileNav";
import { Nav } from "./Nav";
import { Topbar } from "./Topbar";

export const MainLayout: FC = ({ children }) => {
  const { isMobile } = useScreenType();

  return (
    <div className="w-full h-screen overflow-y-hidden flex flex-col">
      <Topbar />
      <div className="w-full h-full">
        <MainGrid>
          <>
            {!isMobile ? <Nav /> : <MobileNav />}
            {children}
          </>
        </MainGrid>
      </div>
    </div>
  );
};
