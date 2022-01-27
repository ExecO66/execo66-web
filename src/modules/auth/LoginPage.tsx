import { SvgColoredGoogleLogo } from "icons/ColoredGoogleLogo";
import { SvgLoginBottomRight } from "icons/LoginBR";
import { SvgLoginTopLeft } from "icons/LoginTL";
import { NextPage } from "next";
import { FC } from "react";

const LoginButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-primary rounded-md drop-shadow-xl flex items-center gap-10 p-5 mt-10 hover:bg-secondary select-none"
      style={{ width: "80%", height: "55px", border: "1px solid" }}
    >
      <SvgColoredGoogleLogo className="" style={{ width: "28px" }} />
      <h1 className="text-contrast">Sign in with Google</h1>
    </div>
  );
};

export const LoginPage: NextPage = () => {
  return (
    <div className="bg-punch relative flex items-center justify-center w-full h-full">
      <SvgTopLeft />
      <SvgBottomRight />
      <div
        className="w-full sm:w-3/4 lg:max-w-xl flex justify-center items-center relative"
        style={{ height: "70%" }}
      >
        <LoginForm>
          <div className="pl-12 pt-28">
            <LoginText>Sign in with</LoginText>
            <LoginText>Google</LoginText>
            <LoginButton />
          </div>
        </LoginForm>
      </div>
    </div>
  );
};

// ui
const SvgTopLeft: FC = () => (
  <SvgLoginTopLeft className="absolute top-0 left-0 z-50 hidden md:block" />
);

const SvgBottomRight: FC = () => (
  <SvgLoginBottomRight className="absolute bottom-0 right-0 z-50 hidden md:block" />
);

const LoginForm: FC = ({ children }) => (
  <div className="h-full relative z-20 rounded-2xl bg-primary flex flex-col w-full sm:w-3/4">
    {children}
  </div>
);

const LoginText: FC = ({ children }) => (
  <h1 className="m-3 font-semibold text-3xl text-contrast">{children}</h1>
);
