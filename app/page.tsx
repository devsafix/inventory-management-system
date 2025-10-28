import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";
import LandingPageClient from "@/components/LandingPageClient";

export default async function Home() {
  const user = await stackServerApp.getUser();
  if (user) {
    redirect("/dashboard");
  }

  return <LandingPageClient />;
}
