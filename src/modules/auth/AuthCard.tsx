import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { CreateAccountSlide } from "./CreateAccountSlide";
import { LoginSlide } from "./LoginSlide";

const authTypes = ["create-account", "login"];

export const AuthCard: FC = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const type = router.query.auth as string;
    if (!authTypes.includes(type)) {
      router.push(router.pathname + "?auth=login", undefined, {
        shallow: true,
      });
      return;
    }

    switch (type as "create-account" | "login") {
      case "create-account":
        setIsLogin(false);
        break;
      case "login":
        setIsLogin(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.auth]);

  return (
    <section className="w-full h-full lg:w-[430px] xl:w-[63%] lg:h-[85%] transition-all duration-200 overflow-hidden bg-white md:rounded-lg xl:grid xl:grid-cols-2">
      <article className="bg-neutral-100 px-16 hidden xl:flex xl:flex-col items-center justify-center z-50">
        <div className="w-full h-[200px] overflow-hidden relative">
          <Image
            className="object-contain w-full"
            src="/imgs/auth-dec-img.png"
            alt=""
            layout="fill"
          />
        </div>
        <div>
          <div className="text-center pt-6 pb-4 font-semibold text-xl">
            Turning in made easy
          </div>
          <div className="text-center font-medium">
            Making the lives of CS teachers easier with speedy autograding
          </div>
        </div>
      </article>

      <article className="relative w-full h-full">
        {isLogin == null ? (
          <div></div>
        ) : (
          <>
            <div
              className={`w-full h-full absolute top-0 transform transition duration-300 ${
                isLogin == true ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <LoginSlide />
            </div>
            <div
              className={`w-full h-full absolute top-0 transform transition duration-300 ${
                isLogin == false ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <CreateAccountSlide />
            </div>
          </>
        )}
      </article>
    </section>
  );
};
