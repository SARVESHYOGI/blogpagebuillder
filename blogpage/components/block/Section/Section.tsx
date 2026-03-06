import { cx } from "class-variance-authority";

import React from "react";

export interface SectionContainerProps {
  inGrid: boolean;
}

export interface SectionProps {
  bg?: "blue" | "green" | "gray";
  inGrid?: boolean;
}

export function SectionCotainer({
  children,
  inGrid,
}: React.PropsWithChildren<SectionContainerProps>) {
  return (
    <div
      data-type="section-container"
      className={cx("grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4", {
        "max-w-5xl mx-auto": inGrid,
      })}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  bg,
  inGrid,
}: React.PropsWithChildren<SectionProps>) {
  return (
    <div
      data-type="section"
      className={cx({
        "bg-blue-200": bg === "blue",
        "bg-green-200": bg === "green",
        "bg-gray-200": bg === "gray",
      })}
    >
      <SectionCotainer inGrid={Boolean(inGrid)}>{children}</SectionCotainer>
    </div>
  );
}
