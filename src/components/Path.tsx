import { FC } from "react";

export const Path: FC<{ path: string }> = ({ path }) => {
  return (
    <article>
      <h1 className="font-semibold text-neutral-600">{path}</h1>
    </article>
  );
};
