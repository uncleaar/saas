"use client";
import { trpc } from "@/app/_trpc/client";
import UploadButton from "@/ui/buttons/UploadButton/UploadButton";
import { Ghost } from "lucide-react";
import React from "react";
import Skeleton from "react-loading-skeleton";

type Props = {};

export const Dashboard = (props: Props) => {
  const { data: files, isLoading } = trpc.getUserFiles.useQuery();

  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="flex items-center justify-between border-b border-gray-200">
        <div className="mt-8 flex flex-col items-start justify-between gap-4   pb-5 sm:flex-row sm:items-center sm:gap-0">
          <h1 className="mb-3 font-bold text-5xl text-gray-900">My files</h1>
        </div>

        <UploadButton />
      </div>

      <div>
        {files && files?.length !== 0 ? (
          <ul className="mt-8 grid grid-cols-1">
            <li>item</li>
          </ul>
        ) : isLoading ? (
          <Skeleton height={100} className="my-2" count={3} />
        ) : (
          <div className="mt-16 flex flex-col items-center gap-2">
            <Ghost className="h-8 w-8 text-zinc-900" />
            <h3 className="font-semibold text-xl">Empty around here</h3>
            <p>upload your first pdf</p>
          </div>
        )}
      </div>
    </main>
  );
};
