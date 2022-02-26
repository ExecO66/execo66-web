import { FC } from "react";

export const TextSeparationBar: FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  return (
    <div className={`w-full flex items-center ${className}`}>
      <div className="justify-start w-[100%] bg-[#999999] h-[1.5px]"></div>
      <span className="whitespace-nowrap text-[13px] mx-4 text-[#999999]">
        {text}
      </span>
      <div className="justify-end w-[100%] bg-[#999999] h-[1.5px]"></div>
    </div>
  );
};
