import { IconComponent } from "../types/IconComponent";

export const SvgOutlineGear: IconComponent = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.675 4.317c-.426-1.756-2.924-1.756-3.35 0a1.723 1.723 0 01-2.572 1.065c-1.544-.94-3.31.827-2.37 2.37a1.724 1.724 0 01-1.066 2.573c-1.756.426-1.756 2.924 0 3.35a1.725 1.725 0 011.065 2.572c-.94 1.544.827 3.31 2.37 2.37a1.724 1.724 0 012.573 1.066c.426 1.756 2.924 1.756 3.35 0a1.725 1.725 0 012.572-1.065c1.544.94 3.31-.827 2.37-2.37a1.725 1.725 0 011.066-2.573c1.756-.426 1.756-2.924 0-3.35a1.724 1.724 0 01-1.065-2.572c.94-1.544-.827-3.31-2.37-2.37a1.724 1.724 0 01-2.573-1.066z"
      ></path>
      <path
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.121 14.121A3 3 0 109.88 9.88a3 3 0 004.242 4.242z"
      ></path>
    </svg>
  );
};
