import { SvgChevronDown } from "../icons/ChevronDown";
import { FC, useState } from "react";

export interface BaseDropdownListProps<T> {
  title: string;
  list: T[];
  ListElement: FC<T>;
  open: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BaseDropdownList: FC<BaseDropdownListProps<any>> = <T,>({
  list,
  title,
  ListElement,
  open: defaultOpen = false,
}: BaseDropdownListProps<T>) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="w-full h-full">
      <div
        className="flex items-center gap-3 select-none cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <SvgChevronDown
          className={`w-4 h-4 transition-all duration-300 ${
            open ? "" : "-rotate-90"
          }`}
        />
        <h1 className="text-contrast font-semibold text-2xl">{title}</h1>
      </div>
      <div className="w-1/2 bg-neutral-200 my-2 h-[1.5px]"></div>
      <article
        className={`w-2/3 py-5 flex flex-col gap-8 overflow-hidden ${
          open ? "" : "max-h-0 py-0"
        }`}
      >
        {list.map((x, i) => {
          return <ListElement key={i + "dl"} {...x} />;
        })}
      </article>
    </div>
  );
};
