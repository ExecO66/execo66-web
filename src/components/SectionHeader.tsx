import { FC } from "react";

export const SectionHeader: FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <h1 className="text-contrast font-semibold text-3xl">{text}</h1>
      <div className="w-full h-[1.5px] bg-neutral-300 my-4"></div>
    </>
  );
};
