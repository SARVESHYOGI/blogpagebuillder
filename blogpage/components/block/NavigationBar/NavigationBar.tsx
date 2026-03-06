import { cx } from "class-variance-authority";

export interface NavigationBarProps {
  BackgroundColor?: string;
  TextIconColor?: string;
  GapFromTop?: number;
  GapFromBottom?: number;
  BackgroundStyle?: "solid" | "blur" | "transparent";
  Sticky?: boolean;
  Logo?: string;
  ShowLogo?: boolean;
  LogoSize?: "sm" | "md" | "lg";
}

export function NavigationBar({
  BackgroundColor = "white",
  TextIconColor = "black",
  GapFromTop = 0,
  GapFromBottom = 0,
  BackgroundStyle = "solid",
  Sticky = false,
  ShowLogo = false,
  LogoSize = "md",
  Logo,
}: NavigationBarProps) {
  const backgroundClass = cx({
    "bg-white": BackgroundStyle === "solid",
    "bg-white/50 backdrop-blur-md": BackgroundStyle === "blur",
    "bg-transparent": BackgroundStyle === "transparent",
  });

  const stickyClass = Sticky ? "sticky top-0 z-50" : "";

  const logoSizeClass = cx({
    "h-6": LogoSize === "sm",
    "h-10": LogoSize === "md",
    "h-16": LogoSize === "lg",
  });

  return (
    <nav
      style={{
        marginTop: GapFromTop,
        marginBottom: GapFromBottom,
        color: TextIconColor,
        backgroundColor: BackgroundColor,
      }}
      className={cx(
        "flex items-center justify-between px-4 md:px-8",
        backgroundClass,
        stickyClass,
      )}
    >
      {ShowLogo && Logo && (
        <div className="shrink-0">
          <img src={Logo} alt="Logo" className={logoSizeClass} />
        </div>
      )}

      <ul className="flex space-x-4">
        <li>
          <a href="#" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>

      {/* <div className="flex space-x-4">
        <button style={{ color: TextIconColor }}>🔍</button>
        <button style={{ color: TextIconColor }}>⚙️</button>
      </div> */}
    </nav>
  );
}
