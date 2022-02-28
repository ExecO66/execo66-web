import { FC } from "react";

export const ClientRender: FC = ({ children }) => {
  const isServer = typeof window == "undefined";

  if (isServer) {
    return null;
  }

  return <>{children}</>;
};
