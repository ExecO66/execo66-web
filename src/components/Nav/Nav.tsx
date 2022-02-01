import { SvgSolidBookmark } from "icons/SolidBookmark";
import { SvgSolidDashboard } from "icons/SolidDashboard";
import { useRouter } from "next/router";
import { FC } from "react";
import { IconComponent } from "types/IconComponent";
import Link from "next/link";

export const Nav: FC = () => {
  const { pathname } = useRouter();

  return (
    <>
      <div className="w-2/12 h-full relative"></div>
      <div className="w-2/12 h-full fixed top-0 left-0 bg-secondary">
        <ul className="font-semibold text-md pt-24">
          <Link href="/dash" passHref>
            <a>
              <NavItem
                title="Dashboard"
                Icon={SvgSolidDashboard}
                matchPath={(x) => x === "/dash"}
                pathname={pathname}
              />
            </a>
          </Link>

          <NavItem
            title="Teacher Options"
            Icon={SvgSolidBookmark}
            matchPath={(x) => x.startsWith("/teacher")}
            pathname={pathname}
          />
        </ul>
      </div>
    </>
  );
};

// ui
const NavTitle: FC = ({ children }) => (
  <h1 className="ml-3 whitespace-nowrap">{children}</h1>
);

const NavItem: FC<{
  title: string;
  pathname: string;
  matchPath: (x: string) => boolean;
  Icon: IconComponent;
}> = ({ title, pathname, matchPath, Icon }) => (
  <li
    className={`flex px-10 py-5 mb-4 hover:bg-primary relative select-none cursor-pointer ${
      matchPath(pathname) && "bg-primary border-l-4 border-punch"
    }`}
    style={{ borderBottomRightRadius: "35px" }}
  >
    <Icon />
    <NavTitle>{title}</NavTitle>
  </li>
);