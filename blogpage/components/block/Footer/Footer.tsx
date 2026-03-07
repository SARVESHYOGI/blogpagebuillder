import { cx } from "class-variance-authority";
import { data } from "../../../db";

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

  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    website?: string;
  };
}

const logo = data.shop_images[0].uri;

export function Footer({
  PrimaryColor = "#F2A640",
  SecondaryColor = "#000000",

  GapFromTop = 0,
  GapFromBottom = 0,

  Layout = "Columns",

  ShowLogo = true,
  ShowSocials = true,
  ShowContact = true,

  CopyrightText = "© 2026 Your Restaurant. All rights reserved.",

  links = [
    { label: "Menu", href: "/Menu" },
    { label: "Gallery", href: "/Gallery" },
    { label: "Contact", href: "/Contact" },
  ],

  socialLinks = {},
}: FooterProps) {
  const layoutClass = cx({
    "grid grid-cols-1 md:grid-cols-3 gap-10 items-start": Layout === "Columns",
    "flex flex-col items-center text-center gap-6": Layout === "Simple",
  });

  return (
    <footer
      style={{
        marginTop: GapFromTop,
        marginBottom: GapFromBottom,
        backgroundColor: PrimaryColor,
        color: SecondaryColor,
      }}
      className="w-full px-6 md:px-12 py-10"
    >
      <div className={cx("max-w-7xl mx-auto", layoutClass)}>
        {/* LEFT SECTION */}
        <div>
          {ShowLogo && (
            <div className="flex items-center gap-3 mb-3">
              <img src={logo} alt="logo" className="h-10" />
              <span className="font-semibold text-lg">Test Dev Shop</span>
            </div>
          )}

          <p className="text-sm opacity-80">{CopyrightText}</p>
        </div>

        {/* CENTER MENU */}
        {links.length > 0 && (
          <div
            className={cx(
              "flex flex-col gap-2",
              Layout === "Columns"
                ? "items-start md:items-center"
                : "items-center",
            )}
          >
            {links.map((link, index) => (
              <a
                key={`${link.href ?? "nohref"}-${link.label ?? "nolabel"}-${index}`}
                href={link.href}
                className="hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* RIGHT CONTACT */}
        <div
          className={cx(
            "flex flex-col gap-2",
            Layout === "Columns" ? "md:items-end" : "items-center",
          )}
        >
          {ShowContact && (
            <>
              <p>{data.phone_number}</p>
              <p>{data.email}</p>
              <p className="text-sm opacity-80">{data.public_address}</p>
            </>
          )}

          {ShowSocials && (
            <div className="flex gap-3 mt-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-xs">
                F
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-xs">
                I
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-xs">
                T
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-xs">
                Y
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-xs">
                W
              </div>
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM MESSAGE */}
      <div className="text-center text-xs opacity-60 mt-6">
        Live restaurant data will populate on the website.
      </div>
    </footer>
  );
}
