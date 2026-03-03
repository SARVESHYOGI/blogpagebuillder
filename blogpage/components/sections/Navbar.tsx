import React from "react";

type NavbarProps = {
  logo: string;
  links?: { label: string; href: string }[];
};

export const Navbar: React.FC<NavbarProps> = ({ logo, links }) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <strong>{logo}</strong>
      <div style={{ display: "flex", gap: "20px" }}>
        {links?.map((link, i) => (
          <a key={i} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
