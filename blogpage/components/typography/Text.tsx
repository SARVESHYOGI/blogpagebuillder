import React from "react";

type TextProps = {
  text: string;
  size?: number;
  align?: React.CSSProperties["textAlign"];
};

export const Text: React.FC<TextProps> = ({
  text,
  size = 16,
  align = "left",
}) => {
  return <p style={{ fontSize: `${size}px`, textAlign: align }}>{text}</p>;
};
