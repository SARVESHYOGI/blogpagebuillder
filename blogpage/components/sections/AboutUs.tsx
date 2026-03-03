import React from "react";

type AboutUsProps = {
  title: string;
  description: string;
};

export const AboutUs: React.FC<AboutUsProps> = ({ title, description }) => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};
