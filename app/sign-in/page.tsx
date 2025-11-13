import { SignIn } from "@stackframe/stack";
import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";
import SignInWrapper from "@/components/SignInWrapper";

export default async function SignInPage() {
  const user = await stackServerApp.getUser();
  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-slate-50 flex md:gap-10 gap-3 md:flex-row flex-col items-center justify-center p-4">
      <SignInWrapper />
      <SignIn />
    </div>
  );
}
