import { cx } from "class-variance-authority";

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
      style={
        { "--start": inset + 1, "--end": -inset - 1 } as React.CSSProperties
      }
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
