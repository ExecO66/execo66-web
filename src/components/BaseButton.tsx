import { FC } from "react";

const colorClassnames = {
  primary: "bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300",
  secondary: "bg-neutral-100 hover:bg-neutral-50 border-2 border-neutral-400",
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
