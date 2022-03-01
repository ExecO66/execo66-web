import { useMediaQuery } from "react-responsive";

export const useScreenType = () => {
  const isDesktop = useMediaQuery({ minWidth: "751px" });
  const isMobile = useMediaQuery({ maxWidth: "750px" });
<<<<<<< Updated upstream
  const profileOnRight = useMediaQuery({ minWidth: "1280px" });
=======
  const profileOnRight = useMediaQuery({ minWidth: "200px" });
>>>>>>> Stashed changes

  return { profileOnRight, isMobile, isDesktop };
};
