import React from "react";

export interface TextProps {
  text: string;
}

export function Text({ text }: TextProps) {
  return <p data-type="text">{text}</p>;
}
