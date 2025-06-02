"use client";

import { IProject } from "@/app/utils/data";
import { WobbleCard } from "./Description";
import { IconDownload } from "@tabler/icons-react";

export default function WobbleCardComponent({
  data,
}: {
  data: IProject | undefined;
}) {
  return (
    <WobbleCard
      onClick={
        data!.hasDownloadApk
          ? () => {
              const link = document.createElement("a");
              link.href = data!.apkUrl!;
              link.click();
            }
          : () => {}
      }
      className="col-span-1 cursor-pointer flex flex-col sm:flex-row justify-between items-center w-full"
    >
      {data!.hasDownloadApk ? (
        <>
          <h1 className="text-bold text-center mb-1">Downlaod APK</h1>
          <IconDownload />
        </>
      ) : (
        <>
          <h1 className="text-bold text-center">
            Apk File is Not Available, see Repository
          </h1>
        </>
      )}
    </WobbleCard>
  );
}
