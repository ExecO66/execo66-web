import { FC } from "react";

const colorClassnames = {
  primary: "bg-[#957ED6] hover:bg-[#8c77c9] disabled:bg-[#8979b8]",
  secondary: "bg-[#FAFAFF] hover:bg-[#F6F6F6] border-2 border-[#C7C7CC]",
};

export interface BaseButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
  color: keyof typeof colorClassnames;
}

export const BaseButton: FC<BaseButtonProps> = ({
  className,
  color = "primary",
  ...props
}) => {
  return (
    <button
      className={`rounded-[5px] ${colorClassnames[color]} ${className}`}
      {...props}
    ></button>
  );
};
