import { useScreenType } from "hooks/useScreenType";
import { FC, useEffect, useState } from "react";

export const MainGrid: FC = ({ children }) => {
  const [gridTc, setGridTc] = useState("");
  const { isDesktop, isMobile } = useScreenType();

  useEffect(() => {
    if (isDesktop) {
      setGridTc("auto 1fr");
    } else if (isMobile) {
      setGridTc("1fr");
    }
  }, [isDesktop, isMobile]);

  return (
    <div
      className="w-full h-full overflow-x-hidden"
      style={{
        display: "grid",
        gridTemplateColumns: gridTc,
      }}
    >
      {children}
    </div>
  );
};
