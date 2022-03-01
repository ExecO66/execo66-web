import { FC } from "react";

export const Topbar: FC = () => {
  return (
    <section className="w-full min-h-[55px] xl:min-h-[65px] h-[6vh] flex px-[2%] items-center bg-neutral-50 border-b-[1px] border-neutral-300">
      <h1 className="text-primary-500 font-semibold text-xl">ExecO</h1>
    </section>
  );
};
