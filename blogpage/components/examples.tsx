import { cx } from "class-variance-authority";

export interface SectionProps {
  bg?: "blue" | "green" | "gray";
  inGrid?: boolean;
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

export interface SectionContainerProps {
  inGrid: boolean;
}

export function SectionCotainer({
  children,
  inGrid,
}: React.PropsWithChildren<SectionContainerProps>) {
  return (
    <div
      data-type="section-container"
      className={cx("grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4", {
        "max-w-screen-lg mx-auto": inGrid,
      })}
    >
      {children}
    </div>
  );
}

export interface CardProps {
  bg: "white" | "purple" | "amber";
  media?: string;
  rounded?: "sm" | "md" | "lg";
  inset?: number;
}

export function Card({
  children,
  bg,
  media,
  rounded,
  inset = 0,
}: React.PropsWithChildren<CardProps>) {
  return (
    <div
      style={{
        backgroundImage: `url(${media})`,
        backgroundSize: "cover",
        "--start": inset + 1,
        "--end": -inset - 1,
      }}
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
    </div>
  );
}

export interface RowProps {
  inset?: number;
  padding?: "sm" | "md" | "lg" | "-sm" | "-md" | "-lg";
  columns?: number;
}

export function Row({
  children,
  inset = 0,
  padding,
}: React.PropsWithChildren<RowProps>) {
  return (
    <div
      data-type="row"
      style={{ "--start": inset + 1, "--end": -inset - 1 }}
      className={cx(
        "grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 col-span-2 md:col-span-6 lg:col-span-12 lg:col-end-[--end] lg:col-start-[--start]",
        {
          "mx-4": padding === "sm",
          "mx-8": padding === "md",
          "mx-12": padding === "lg",
          "-mx-4": padding === "-sm",
          "-mx-8": padding === "-md",
          "-mx-12": padding === "-lg",
        },
      )}
    >
      {children}
    </div>
  );
}

export interface ColumnProps {
  colsS?: number;
  colsM?: number;
  colsL?: number;
}

export function Column({
  children,
  colsL = 12,
  colsM = 6,
  colsS = 2,
}: React.PropsWithChildren<ColumnProps>) {
  return (
    <div
      data-type="column"
      style={{
        "--cols-s": colsS,
        "--cols-m": colsM,
        "--cols-l": colsL,
      }}
      className={cx(
        "col-[span_var(--cols-s)_/_span_var(--cols-s)] md:col-[span_var(--cols-m)_/_span_var(--cols-m)] lg:col-[span_var(--cols-l)_/_span_var(--cols-l)]",
      )}
    >
      {children}
    </div>
  );
}
