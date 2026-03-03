import React from "react";

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryColor: string;
  secondaryColor: string;
}

export const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  primaryColor,
  secondaryColor,
}) => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 40px",
        position: "relative",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>{title}</h1>

        <p style={{ marginBottom: "24px", opacity: 0.9 }}>{subtitle}</p>

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            style={{
              background: primaryColor,
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {primaryButtonText}
          </button>

          <button
            style={{
              background: secondaryColor,
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontWeight: 600,
              cursor: "pointer",
              color: "#000",
            }}
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};
