import { DropZone } from "@puckeditor/core";

export interface FlexProps {
  items?: { id: string }[];
  minItemWidth?: number;
}

export function Flex({ items = [], minItemWidth = 300 }: FlexProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}px, 1fr))`,
        gap: 16,
      }}
    >
      {items.map((item, i) => (
        <div
          key={item.id || i}
          style={{
            minHeight: 120,
            border: "1px dashed #ccc",
            padding: 16,
          }}
        >
          <DropZone zone={`flex-item-${i}`} />
        </div>
      ))}
    </div>
  );
}
