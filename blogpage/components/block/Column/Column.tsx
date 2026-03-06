import { cx } from "class-variance-authority";

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
      style={
        {
          "--cols-s": colsS,
          "--cols-m": colsM,
          "--cols-l": colsL,
        } as React.CSSProperties
      }
      className={cx(
        "col-[span_var(--cols-s)/span_var(--cols-s)] md:col-[span_var(--cols-m)/span_var(--cols-m)] lg:col-[span_var(--cols-l)/span_var(--cols-l)]",
      )}
    >
      {children}
    </div>
  );
}
