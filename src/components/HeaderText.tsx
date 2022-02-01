import { FC } from "react";

export const HeaderText: FC = ({ children }) => (
  <>
    <h1 className="text-contrast font-semibold text-2xl">{children}</h1>
    <div className="w-full bg-secondary my-4" style={{ height: "3px" }}></div>
  </>
);
