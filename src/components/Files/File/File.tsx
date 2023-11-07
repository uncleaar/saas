import { Plus } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";
import { format } from "date-fns";

interface FileProps {
  file: {
    id: string;
    name: string;
    createdAt: string;
  };
}

export const File: FC<FileProps> = ({ file }) => {
  return (
    <li className="col-span-1 divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg">
      <Link href={`/dashboard/${file.id}`} className="flex flex-col gap-2">
        <div className="pt-6 px-6 flex w-full items-center justify-between space-x-6">
          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-800" />
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-4">
              <h3 className="truncate text-lg font-semibold">{file.name}</h3>
            </div>
          </div>
        </div>
      </Link>

      <div className="px-6 mt-5 grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-700">
        <div className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          {format(new Date(file.createdAt), "MMM d, yyyy")}
        </div>
      </div>
    </li>
  );
};
