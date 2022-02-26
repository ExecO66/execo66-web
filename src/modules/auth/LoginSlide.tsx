import { BaseButton } from "components/BaseButton";
import { BaseInput } from "components/BaseInput";
import { TextSeparationBar } from "components/TextSeparationBar";
import { SvgColoredGoogleLogo } from "icons/ColoredGoogleLogo";
import { useRouter } from "next/router";

export const LoginSlide = () => {
  const router = useRouter();

  function toCreateAccount() {
    router.push(router.pathname + "?auth=create-account", undefined, {
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
          Login
        </h1>
        <div className="flex flex-col gap-[6px]">
          <label className="font-semibold text-normal" htmlFor="email">
            Email
          </label>
          <BaseInput
            id="email"
            className="w-[310px] xxs:w-[320px] xxs:h-[44px]"
          />
        </div>
        <div className="relative flex flex-col gap-[6px] mt-[5%]">
          <h3 className="absolute top-1 right-0 font-medium text-[#454CEF] text-sm cursor-pointer">
            Forgot password?
          </h3>
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
          <h1 className="text-white font-semibold">Log In</h1>
        </BaseButton>
        <div
          onClick={toCreateAccount}
          className="mt-[6%] font-medium text-center"
        >
          <span>No Account?&nbsp;</span>
          <span className="text-[#454CEF] select-none cursor-pointer">
            Create one
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
