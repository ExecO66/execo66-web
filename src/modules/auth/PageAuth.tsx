import { NextPage } from "next";
import { AuthCard } from "./AuthCard";

export const PageAuth: NextPage = () => {
  return (
    <div className="relative max-w-screen max-h-screen w-full h-full auth-bg-gradient flex justify-center items-center">
      <AuthCard />
    </div>
  );
};
