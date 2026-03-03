import React from "react";
type SubheadingProps = {
  text: string;
  size?: number;
  align?: React.CSSProperties["textAlign"];
};

export const Subheading: React.FC<SubheadingProps> = ({
  text,
  size = 24,
  align = "left",
}) => {
  return <h2 style={{ fontSize: `${size}px`, textAlign: align }}>{text}</h2>;
};
