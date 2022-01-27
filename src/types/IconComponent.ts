import { CSSProperties, SVGProps } from "react";

export type IconComponent = (
  props: SVGProps<SVGSVGElement> & { style?: CSSProperties }
) => JSX.Element;
