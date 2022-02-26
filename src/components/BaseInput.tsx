import { FC } from "react";

export interface BaseInputProps
  extends React.ComponentPropsWithoutRef<"input"> {
  className?: string;
}

export const BaseInput: FC<BaseInputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`bg-[#FAFAFF] border-2 border-[#C7C7CC] rounded-[5px] outline-none p-2 text-sm ${className}`}
      type="text"
      {...props}
    />
  );
};
