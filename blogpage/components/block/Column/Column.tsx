import { DropZone } from "@puckeditor/core";

export interface ColumnProps {
  Distribution?: boolean;
  columns?: {
    span?: number;
  }[];
}

export function Column({ Distribution = true, columns = [] }: ColumnProps) {
  const count = columns.length || 1;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: Distribution
          ? `repeat(${count}, 1fr)`
          : "repeat(12, 1fr)",
        gap: 16,
      }}
    >
      {columns.map((col, index) => (
        <div
          key={index}
          style={{
            gridColumn:
              !Distribution && col.span ? `span ${col.span}` : undefined,
            minHeight: 120,
            border: "1px dashed #ccc",
            padding: 16,
          }}
        >
          <DropZone zone={`column-${index}`} />
        </div>
      ))}
    </div>
  );
}
