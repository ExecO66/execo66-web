import { BaseButton } from "components/BaseButton";
import { BaseInput } from "components/BaseInput";
import { TextSeparationBar } from "components/TextSeparationBar";
import { SvgColoredGoogleLogo } from "icons/ColoredGoogleLogo";
import { useRouter } from "next/router";

export const CreateAccountSlide = () => {
  const router = useRouter();

  function toLogin() {
    router.push(router.pathname + "?auth=login", undefined, {
      shallow: true,
    });
  }

  return (
    <div className="w-full h-full flex justify-center">
      <div className="p-8 my-[15%] sm:my-[10%] flex flex-col justify-center">
        <h1 className="text-2xl xxs:text-3xl tracking-wide font-bold">
          Welcome to ExecO
        </h1>
        <h1 className="text-lg xxs:text-xl tracking-wide font-bold text-[#957ED6] mb-[33px]">
          Create Account
        </h1>
        <div className="flex flex-col gap-[6px]">
          <label className="font-semibold text-normal" htmlFor="fullname">
            Full Name
          </label>
          <BaseInput
            id="fullname"
            className="w-[310px] xxs:w-[320px] xxs:h-[44px]"
          />
        </div>
        <div className="flex flex-col gap-[6px] mt-[5%]">
          <label className="font-semibold text-normal" htmlFor="email">
            Email
          </label>
          <BaseInput
            id="email"
            className="w-[310px] xxs:w-[320px] xxs:h-[44px]"
          />
        </div>
        <div className="flex flex-col gap-[6px] mt-[5%]">
          <label className="font-semibold text-normal" htmlFor="password">
            Password
          </label>
          <BaseInput
            id="password"
            className="w-[310px] xxs:w-[320px] h-[44px]"
          />
        </div>
        <BaseButton
          color="primary"
          className="w-[310px] xxs:w-[320px] h-[44px] mt-[9%]"
        >
          <h1 className="text-white font-semibold">Create Account</h1>
        </BaseButton>
        <div onClick={toLogin} className="mt-[6%] font-medium text-center">
          <span>Have an Account?&nbsp;</span>
          <span className="text-[#454CEF] select-none cursor-pointer">
            Log in
          </span>
        </div>

        <TextSeparationBar
          text="or Sign in with our providers"
          className="mt-[6%]"
        />

        <BaseButton
          color="secondary"
          className="w-[320px] h-[44px] mt-[9%] flex items-center justify-center gap-4"
        >
          <SvgColoredGoogleLogo className="" style={{ width: "20px" }} />
          <h1 className="text-black text-sm font-semibold">
            Continue with Google
          </h1>
        </BaseButton>
      </div>
    </div>
  );
};
