import { cx } from "class-variance-authority";

export interface TextProps {
  text?: string;
  size?: "S" | "M" | "L";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  align?: "Left" | "Center" | "Right";
  color?: string;
  padding?: string;
}

export function Text({
  text = "Text",
  size = "M",
  level = 2,
  align = "Left",
  color = "black",
  padding = "0px",
}: TextProps) {
  const Tag: React.ElementType = `h${level}`;

  const sizeClass = cx({
    "text-lg": size === "S",
    "text-xl": size === "M",
    "text-2xl": size === "L",
  });

  const alignClass = cx({
    "text-left": align === "Left",
    "text-center": align === "Center",
    "text-right": align === "Right",
  });

  return (
    <Tag
      className={`${sizeClass} ${alignClass}`}
      style={{
        color,
        padding,
      }}
    >
      {text}
    </Tag>
  );
}
