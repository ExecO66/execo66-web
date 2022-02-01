import { FC, HTMLAttributes } from "react";

interface DateBoxProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  dateStr: string;
  dateProps?: HTMLAttributes<HTMLDivElement>;
}

export const DateBox: FC<DateBoxProps> = ({
  title,
  dateStr,
  dateProps,
  className = "w-52 h-52",
  style,
}) => (
  <div className={className} style={style}>
    <h1 className="font-semibold">{title}</h1>
    <h1
      {...dateProps}
      className={
        `whitespace-nowrap text-lg font-semibold` +
          " " +
          dateProps?.className || ""
      }
    >
      {dateStr}
    </h1>
  </div>
);
