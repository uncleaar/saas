import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { getUser } = getKindeServerSession();

  const user = getUser();

  if (!user.id || !user.email) redirect("/auth-callback?origin=/dashboard");

  return <>{user.email}</>;
}
