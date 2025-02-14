"use client";

import { projects } from "@/components/project/project.data";
import { AppStoreIcon, PlayStoreIcon, WorldSearchIcon } from "@/components/svg";
import { useTheme } from "next-themes";
import Image from "next/image";

export function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex min-w-[290px] flex-col">
      <figure className="rounded-xl mb-3 aspect-video overflow-hidden rounded-md bg-primary-7">
        <Image
          src={project.image[resolvedTheme as "light"] ?? project.image.light}
          alt=""
          width={288}
          height={180}
          className="h-full w-full"
          suppressHydrationWarning
        />
      </figure>
      <div className="flex flex-grow flex-col justify-between gap-4">
        <div className="space-y-2.5">
          <h4 className="text-subtitle font-semibold text-pure-color tablet:text-base desktop:text-body">
            {project.name}
          </h4>
          <p className="mb-6 text-subtitle text-subtitle-color-secondary tablet:text-base">{project.description}</p>
        </div>
        <div className="">
          {project.appType === "mobile-app" ? (
            <div className="flex w-full items-center gap-3">
              <a
                target="_blank"
                rel="noreferrer"
                href={project.playStoreLink}
                className="flex w-full items-center gap-3 rounded-sm border border-primary-7 bg-primary-7 px-3 py-[10px] duration-300 hover:scale-[102%]"
              >
                <PlayStoreIcon className="size-5" />
                <p className="text-dark text-subtitle font-semibold">Play Store</p>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={project.appStoreLink}
                className="flex w-full items-center gap-3 rounded-sm border border-primary-7 bg-primary-7 px-3 py-[10px] duration-300 hover:scale-[102%]"
              >
                <AppStoreIcon className="text-dark size-5" />
                <p className="text-dark text-subtitle font-semibold">App Store</p>
              </a>
            </div>
          ) : (
            <a
              target="_blank"
              rel="noreferrer"
              href={project.webLink}
              className="flex w-full items-center justify-center gap-3 rounded-sm border border-primary-7 bg-primary-7 px-3 py-[10px] duration-300 hover:scale-[102%]"
            >
              <WorldSearchIcon className="text-dark" />
              <span className="text-dark text-subtitle font-semibold">Visit Website</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
