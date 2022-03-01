import { useMediaQuery } from "react-responsive";

export const useScreenType = () => {
  const isDesktop = useMediaQuery({ minWidth: "751px" });
  const isMobile = useMediaQuery({ maxWidth: "750px" });
  const profileOnRight = useMediaQuery({ minWidth: "1280px" });

  return { profileOnRight, isMobile, isDesktop };
};
