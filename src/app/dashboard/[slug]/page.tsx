import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";
import React from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = params;

  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user) return redirect(`/auth-callback?origin=dashboard/${slug}`);

  const file = await db.file.findFirst({
    where: {
      id: slug,
      userId: user.id,
    },
  });

  if (!file) notFound();

  return <div>{slug}</div>;
};

export default Page;
