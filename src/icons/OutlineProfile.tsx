import { IconComponent } from "types/IconComponent";

export const SvgOutlineProfile: IconComponent = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3.121 15.804A13.936 13.936 0 0110 14c2.5 0 4.847.655 6.879 1.804M13 8a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );
};
