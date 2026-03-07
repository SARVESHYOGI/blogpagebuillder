import React from "react";
import { cx } from "class-variance-authority";

export interface HeadingProps {
  text?: string;
  size?: "L" | "M" | "S";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  align?: "Left" | "Center" | "Right";
  color?: string;
  padding?: number;
}

export function Heading({
  text = "Heading",
  size = "L",
  level = 2,
  align = "Left",
  color = "black",
  padding = 0,
}: HeadingProps) {
  const Tag: React.ElementType = `h${level}`;

  const sizeClass = cx({
    "text-4xl": size === "L",
    "text-2xl": size === "M",
    "text-lg": size === "S",
  });

  const alignClass = cx({
    "text-left": align === "Left",
    "text-center": align === "Center",
    "text-right": align === "Right",
  });

  return (
    <Tag
      className={`${sizeClass} ${alignClass} font-semibold`}
      style={{
        color,
        padding,
      }}
    >
      {text}
    </Tag>
  );
}
