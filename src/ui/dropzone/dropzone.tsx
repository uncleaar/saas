"use client";
import { Progress } from "@radix-ui/react-progress";
import { Cloud, FileIcon } from "lucide-react";
import React, { useState } from "react";
import Dropzone from "react-dropzone";

export const UploadDropzone = () => {
  const [isUploading, setIsUploading] = useState(true);
  const [uploadProgress, setUploadProgress] = useState(0);

  const simulateProgress = (time: number) => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }

        return prev + 5;
      });
    }, time);

    return interval;
  };

  return (
    <Dropzone
      multiple={false}
      onDrop={(acceptedFiles) => {
        setIsUploading(true);
        const progressInterval = simulateProgress(500);
        clearInterval(progressInterval);
        setUploadProgress(100);
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="border h-64 m-4 border-dashed border-gray-300 rounded-lg p-2"
        >
          <div className="flex items-center justify-center h-full w-full">
            <label className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Cloud className="h-6 w-6 text-zinc-500  mb-2" />
                <p className="mb-2 text-sm text-zinc-700">
                  <span>Click to upload file</span>
                </p>

                <p className="text-xs text-zinc-200">PDF (up to 4mb)</p>
              </div>

              {acceptedFiles && acceptedFiles[0] && (
                <div className="max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200">
                  <div className="px-3 py-2 h-full grid place-items-center">
                    <FileIcon className="h-4 w-4 text-blue-600" />
                  </div>

                  <div className="px-3 py-2 h-full text-sm truncate">
                    {acceptedFiles[0].name}
                  </div>
                </div>
              )}

              {isUploading ? (
                <div className="w-full mt-4 max-w-xs mx-auto">
                  <Progress
                    value={uploadProgress}
                    className="h-1 w-full bg-zinc-200"
                  />
                </div>
              ) : null}
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};
