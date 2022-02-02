import { SvgSolidBookmark } from "icons/SolidBookmark";
import { SvgSolidDashboard } from "icons/SolidDashboard";
import { useRouter } from "next/router";
import { FC, HTMLAttributes, useState } from "react";
import { IconComponent } from "types/IconComponent";
import Link from "next/link";
import { SvgChevronDown } from "icons/ChevronDown";

export const Nav: FC = () => {
  const { pathname } = useRouter();
  const [showTeachNav, setTeachNav] = useState(pathname.startsWith("/teacher"));
  const updateTeachNav = () => setTeachNav(!showTeachNav);

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
          {
            // teacher nav
          }
          <article className="mt-7">
            <NavItem
              hoverHighlight={false}
              style={{ alignItems: "center", display: "flex" }}
              onClick={updateTeachNav}
              title="Teacher Options"
              Icon={SvgSolidBookmark}
              matchPath={() => false}
              pathname={pathname}
            >
              <SvgChevronDown
                className={`w-4 h-4 transition-all duration-300 ml-5 ${
                  showTeachNav ? "" : "-rotate-90"
                }`}
              />
            </NavItem>
            <div
              className={`ml-10 flex flex-col overflow-hidden ${
                showTeachNav ? "" : "max-h-0 pb-0"
              }`}
            >
              {[{ title: "My Assignments", url: "/teacher/assignments" }].map(
                ({ title, url }, i) => (
                  <Link href={url} passHref key={i + "-teach-nav"}>
                    <a>
                      <NavItem
                        title={title}
                        style={{
                          padding: ".5rem 2.5rem .5rem 2.5rem",
                          borderBottomRightRadius: "28px",
                        }}
                        Icon={SvgSolidDashboard}
                        matchPath={(x) => x === url}
                        pathname={pathname}
                      />
                    </a>
                  </Link>
                )
              )}
            </div>
          </article>
        </ul>
      </div>
    </>
  );
};

// ui
const NavTitle: FC = ({ children }) => (
  <h1 className="ml-3 whitespace-nowrap">{children}</h1>
);

interface NavItemProps extends HTMLAttributes<HTMLLIElement> {
  title: string;
  pathname: string;
  matchPath: (x: string) => boolean;
  hoverHighlight?: boolean;
  Icon: IconComponent;
}

const NavItem: FC<NavItemProps> = ({
  title,
  pathname,
  matchPath,
  Icon,
  hoverHighlight = true,
  ...props
}) => (
  <li
    {...props}
    className={`flex px-10 py-5 mb-4 relative select-none cursor-pointer ${
      matchPath(pathname) && "bg-primary border-l-4 border-punch"
    } ${hoverHighlight && "hover:bg-primary"}`}
    style={{ borderBottomRightRadius: "35px", ...props.style }}
  >
    <Icon />
    <NavTitle>{title}</NavTitle>
    {props.children}
  </li>
);
