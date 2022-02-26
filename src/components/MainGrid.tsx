import { useScreenType } from "hooks/useScreenType";
import { FC, useEffect, useState } from "react";

export const MainGrid: FC = ({ children }) => {
  const [gridTc, setGridTc] = useState("");
  const screenType = useScreenType();

  useEffect(() => {
    if (screenType == "2-cols") {
      setGridTc("250px 1fr");
    } else if (screenType == "1-cols") {
      setGridTc("1fr");
    }
  }, [screenType]);

  return (
    <div
      className="w-full min-h-screen overflow-x-hidden"
      style={{
        display: "grid",
        gridTemplateColumns: gridTc,
      }}
    >
      {children}
    </div>
  );
};
