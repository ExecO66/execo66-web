import { FC } from "react";

export const TextSeparationBar: FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  return (
    <div className={`w-full flex items-center ${className}`}>
      <div className="justify-start w-full bg-neutral-400 h-[1.5px]"></div>
      <span className="whitespace-nowrap text-[13px] mx-4 text-neutral-500">
        {text}
      </span>
      <div className="justify-end w-full bg-neutral-400 h-[1.5px]"></div>
    </div>
  );
};
