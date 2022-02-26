import { FC } from "react";

export const Header: FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <h1 className="text-contrast font-semibold text-2xl">{text}</h1>
      <div className="w-full bg-secondary my-4" style={{ height: "3px" }}></div>
    </>
  );
};
