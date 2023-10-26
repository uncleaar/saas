import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect, useRouter, useSearchParams } from "next/navigation";

export default async function Page() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const origin = searchParams.get("origin");

  const api = await fetch("/api/");

  const data = await api.json();

  return <>page</>;
}
