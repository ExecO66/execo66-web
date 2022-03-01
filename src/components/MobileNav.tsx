import { SvgOutlineDashboard } from "../icons/OutlineDashboard";
import { SvgOutlineGear } from "../icons/OutlineGear";
import { SvgOutlineProfile } from "../icons/OutlineProfile";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

// meant to fix mobile nav blocking content on the bottom of screen
export const MobileNavPlaceholder: FC = () => {
  return <div className="h-12 p-4"></div>;
};

export const MobileNav: FC = () => {
  const [idx, setIdx] = useState(0);
  const router = useRouter();

  useEffect(() => {
    switch (router.pathname) {
      case "/assignments":
        setIdx(0);
        break;
      case "/settings":
        setIdx(1);
    }
  }, [router]);

  return (
    <nav className="w-screen fixed bottom-0 p-3 bg-neutral-50 border-t-[1px] border-neutral-300 flex justify-center gap-10 z-[9999]">
      <div className="">
        <Link href="/assignments">
          <a>
            <div
              className={`h-12 flex gap-5 items-center rounded-[5px] p-4 select-none cursor-pointer ${
                idx == 0 ? "bg-subprimary-400" : ""
              }`}
            >
              <SvgOutlineDashboard
                stroke={
                  idx == 0
                    ? "var(--color-neutral-50)"
                    : "var(--color-neutral-500)"
                }
              />
              <span
                className={`hidden xl:inline ${
                  idx == 0 ? "text-neutral-50" : "text-neutral-500"
                }`}
              >
                Assignments
              </span>
            </div>
          </a>
        </Link>
      </div>

      <div className="">
        <Link href="/settings">
          <a>
            <div
              className={`h-12 flex gap-5 items-center rounded-[5px] p-4 select-none cursor-pointer ${
                idx == 1 ? "bg-subprimary-400" : ""
              }`}
            >
              <SvgOutlineGear
                stroke={
                  idx == 1
                    ? "var(--color-neutral-50)"
                    : "var(--color-neutral-500)"
                }
              />
              <span
                className={`hidden xl:inline ${
                  idx == 1 ? "text-neutral-50" : "text-neutral-500"
                }`}
              >
                Settings
              </span>
            </div>
          </a>
        </Link>
      </div>

      <div className="">
        <a
          onClick={() =>
            router.push(router.pathname + "?profile=true", undefined, {
              shallow: true,
            })
          }
        >
          <div
            className={`h-12 flex gap-5 items-center rounded-[5px] p-4 select-none cursor-pointer ${
              idx == 1 ? "bg-subprimary-400" : ""
            }`}
          >
            <SvgOutlineProfile
              stroke={
                idx == 1
                  ? "var(--color-neutral-50)"
                  : "var(--color-neutral-500)"
              }
            />
            <span
              className={`hidden xl:inline ${
                idx == 1 ? "text-neutral-50" : "text-neutral-500"
              }`}
            >
              Profile
            </span>
          </div>
        </a>
      </div>
    </nav>
  );
};
