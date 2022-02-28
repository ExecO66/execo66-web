import { FC, useEffect, useState } from "react";

export const ClientRender: FC = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof window != "undefined");
  }, []);

  if (!isClient) {
    return null;
  }

  return <>{children}</>;
};
