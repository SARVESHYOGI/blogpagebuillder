import React from "react";
type FooterProps = {
  text: string;
};

export const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer
      style={{
        background: "#111",
        color: "white",
        padding: "40px",
        textAlign: "center",
      }}
    >
      {text}
    </footer>
  );
};
