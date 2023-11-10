"use client";
import React from "react";
import { trpc } from "@/app/_trpc/client";

import { Ghost } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import { File } from "./File/File";

export const Files = () => {
  const { data: files, isLoading } = trpc.getUserFiles.useQuery();

  return (
    <>
      {files && files?.length !== 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-400 md:grid-cols-2 lg:grid-cols-3">
          {files
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((file) => (
              <File key={file.id} file={file} />
            ))}
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
    </>
  );
};
