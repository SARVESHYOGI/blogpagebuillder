import React from "react";

type ColumnsProp = {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
};

export const Columns: React.FC<ColumnsProp> = ({
  children,
  columns = 2,
  gap = 20,
}) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: `${gap}px`,
        }}
      >
        {children}
      </div>
    </>
  );
};
