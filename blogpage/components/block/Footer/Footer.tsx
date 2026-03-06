import { cx } from "class-variance-authority";

export interface FooterProps {
  PrimaryColor?: string;
  SecondaryColor?: string;
  GapFromTop?: number;
  GapFromBottom?: number;
  Layout?: "Columns" | "Simple";
  ShowLogo?: boolean;
  ShowSocials?: boolean;
  ShowContact?: boolean;
  CopyrightText?: string;
  links?: { label: string; href: string }[];
  Logo?: string;
}

export function Footer({
  PrimaryColor = "#000000",
  SecondaryColor = "#ffffff",
  GapFromTop = 0,
  GapFromBottom = 0,
  Layout = "Simple",
  ShowLogo = false,
  ShowSocials = false,
  ShowContact = false,
  CopyrightText = "© 2026 Your Company",
  links = [],
  Logo,
}: FooterProps) {
  const layoutClass = cx({
    "grid grid-cols-3 gap-4": Layout === "Columns",
    "flex flex-col items-center": Layout === "Simple",
  });

  const logoClass = "h-10 mb-4";

  return (
    <footer
      style={{
        marginTop: GapFromTop,
        marginBottom: GapFromBottom,
        backgroundColor: PrimaryColor,
        color: SecondaryColor,
      }}
      className={`px-4 md:px-8 py-6 ${layoutClass}`}
    >
      {ShowLogo && Logo && (
        <div className="shrink-0">
          <img src={Logo} alt="Logo" className={logoClass} />
        </div>
      )}

      {links.length > 0 && (
        <ul
          className={Layout === "Columns" ? "space-y-2" : "flex space-x-4 mb-4"}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {ShowSocials && (
        <div className="flex space-x-4 mb-4">
          <a href="#" aria-label="Facebook">
            🔵
          </a>
          <a href="#" aria-label="Twitter">
            🐦
          </a>
          <a href="#" aria-label="Instagram">
            📸
          </a>
        </div>
      )}

      {ShowContact && (
        <div className="mb-4">
          <p>Email: contact@yourcompany.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      )}

      {CopyrightText && <div className="text-sm">{CopyrightText}</div>}
    </footer>
  );
}
