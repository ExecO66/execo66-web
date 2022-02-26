import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useScreenType = () => {
  const [cols, setCols] = useState("");
  const is2Cols = useMediaQuery({ minWidth: "1024px" });

  useEffect(() => {
    if (is2Cols) {
      setCols("2-cols");
    } else {
      setCols("1-cols");
    }
  }, [is2Cols]);

  return cols;
};
