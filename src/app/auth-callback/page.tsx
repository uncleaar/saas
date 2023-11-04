import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

export default async function Page() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const origin = searchParams.get("origin");

  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        router.push(origin ? `/${origin}` : "/dashboard");
      }
    },
    onError: (err) => {
      if (err.data?.code === "UNAUTHORIZED") {
        router.push("/sing-in");
      }
    },
    retry: true,
    retryDelay: 500,
  });
}
