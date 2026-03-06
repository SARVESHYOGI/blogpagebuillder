import { cx } from "class-variance-authority";

export interface CardProps {
  bg: "white" | "purple" | "amber";
  media?: string;
  rounded?: "sm" | "md" | "lg";
  inset?: number;
  description?: string;
}

export function Card({
  children,
  bg,
  media,
  rounded,
  inset = 0,
  description,
}: React.PropsWithChildren<CardProps>) {
  return (
    <div
      style={
        {
          backgroundImage: `url(${media})`,
          backgroundSize: "cover",
          "--start": inset + 1,
          "--end": -inset - 1,
        } as React.CSSProperties
      }
      data-type="card"
      className={cx(
        "grid grid-cols-subgrid col-span-2 md:col-span-6 lg:col-span-12",
        "lg:col-end-[--end] lg:col-start-[--start]",
        {
          "bg-white": bg === "white",
          "bg-purple-200": bg === "purple",
          "bg-amber-200": bg === "amber",
          "md:rounded-sm": rounded === "sm",
          "md:rounded-md": rounded === "md",
          "md:rounded-lg": rounded === "lg",
        },
      )}
    >
      {children}
      {description && <p>{description}</p>}
    </div>
  );
}
