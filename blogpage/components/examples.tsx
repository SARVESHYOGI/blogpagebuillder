import { cx } from "class-variance-authority";

import React from "react";

export interface SectionProps {
  bg?: "blue" | "green" | "gray";
  inGrid?: boolean;
}

export function Section({
  children,
  bg,
  inGrid,
}: React.PropsWithChildren<SectionProps>) {
  return (
    <div
      data-type="section"
      className={cx({
        "bg-blue-200": bg === "blue",
        "bg-green-200": bg === "green",
        "bg-gray-200": bg === "gray",
      })}
    >
      <SectionCotainer inGrid={Boolean(inGrid)}>{children}</SectionCotainer>
    </div>
  );
}

export interface SectionContainerProps {
  inGrid: boolean;
}

export function SectionCotainer({
  children,
  inGrid,
}: React.PropsWithChildren<SectionContainerProps>) {
  return (
    <div
      data-type="section-container"
      className={cx("grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4", {
        "max-w-5xl mx-auto": inGrid,
      })}
    >
      {children}
    </div>
  );
}

export interface CardProps {
  bg: "white" | "purple" | "amber";
  media?: string;
  rounded?: "sm" | "md" | "lg";
  inset?: number;
  description?: string;
}

export function Card({
  children,
  bg,
  media,
  rounded,
  inset = 0,
  description,
}: React.PropsWithChildren<CardProps>) {
  return (
    <div
      style={
        {
          backgroundImage: `url(${media})`,
          backgroundSize: "cover",
          "--start": inset + 1,
          "--end": -inset - 1,
        } as React.CSSProperties
      }
      data-type="card"
      className={cx(
        "grid grid-cols-subgrid col-span-2 md:col-span-6 lg:col-span-12",
        "lg:col-end-[--end] lg:col-start-[--start]",
        {
          "bg-white": bg === "white",
          "bg-purple-200": bg === "purple",
          "bg-amber-200": bg === "amber",
          "md:rounded-sm": rounded === "sm",
          "md:rounded-md": rounded === "md",
          "md:rounded-lg": rounded === "lg",
        },
      )}
    >
      {children}
      {description && <p>{description}</p>}
    </div>
  );
}

export interface RowProps {
  inset?: number;
  padding?: "sm" | "md" | "lg" | "-sm" | "-md" | "-lg";
  columns?: number;
}

export function Row({
  children,
  inset = 0,
  padding,
}: React.PropsWithChildren<RowProps>) {
  return (
    <div
      data-type="row"
      style={
        { "--start": inset + 1, "--end": -inset - 1 } as React.CSSProperties
      }
      className={cx(
        "grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 col-span-2 md:col-span-6 lg:col-span-12 lg:col-end-[--end] lg:col-start-[--start]",
        {
          "mx-4": padding === "sm",
          "mx-8": padding === "md",
          "mx-12": padding === "lg",
          "-mx-4": padding === "-sm",
          "-mx-8": padding === "-md",
          "-mx-12": padding === "-lg",
        },
      )}
    >
      {children}
    </div>
  );
}

export interface ColumnProps {
  colsS?: number;
  colsM?: number;
  colsL?: number;
}

export function Column({
  children,
  colsL = 12,
  colsM = 6,
  colsS = 2,
}: React.PropsWithChildren<ColumnProps>) {
  return (
    <div
      data-type="column"
      style={
        {
          "--cols-s": colsS,
          "--cols-m": colsM,
          "--cols-l": colsL,
        } as React.CSSProperties
      }
      className={cx(
        "col-[span_var(--cols-s)/span_var(--cols-s)] md:col-[span_var(--cols-m)/span_var(--cols-m)] lg:col-[span_var(--cols-l)/span_var(--cols-l)]",
      )}
    >
      {children}
    </div>
  );
}

export interface TextProps {
  text: string;
}

export function Text({ text }: TextProps) {
  return <p data-type="text">{text}</p>;
}

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

export interface HeroProps {
  PrimaryColor: string;
  SecondaryColor: string;
  Align: boolean;
  AlignMobileView: boolean;
  AppButtonsAlign: "left" | "center" | "right";
  AppButtonsShape: "square" | "rounded" | "pill";
  BackGroundImage: string;
  LogoUrl: string;
  "Logo.OnDeskTopView": boolean;
  "Logo.Size": "sm" | "md" | "lg";
  "Logo.DeskTopViewLeftSideLogo": boolean;
  BgShadowOnDeskTop: boolean;
  "Title.FontSize": "sm" | "md" | "lg";
  "Title.Level": "1" | "2" | "3" | "4" | "5" | "6";
  "Title.TextTransForm": boolean;
  "SubTitle.FontSize": "sm" | "md" | "lg" | "xl" | "2xl";
  "SubTitle.Level": "1" | "2" | "3" | "4" | "5" | "6";
  "SubTitle.TextTransForm": boolean;
  "OrderNow.HoverTextColor": string;
  "OrderNow.Size": "sm" | "md" | "lg";
  "OrderNow.Shape": boolean;
  "OrderNow.Border": "1" | "2" | "3" | "4" | "5";
  "OrderNow.BorderColor": string;
  "OrderNow.Rounded": "sm" | "md" | "lg";
  "OrderNow.TextTransform": boolean;
  "ReserveNow.BackGroundColor": string;
  "ReserveNow.TextColor": string;
  "ReserveNow.Size": "sm" | "md" | "lg";
  "ReserveNow.Shape": boolean;
  "ReserveNow.Border": "1" | "2" | "3" | "4" | "5";
  "ReserveNow.BorderColor": string;
  "ReserveNow.Rounded": "sm" | "md" | "lg";
  "ReserveNow.TextTransform": boolean;
}

export function HeroComponent(props: HeroProps) {
  const {
    PrimaryColor,
    SecondaryColor,
    BackGroundImage,
    Align,
    AlignMobileView,
  } = props;

  const appButtons = {
    align: props.AppButtonsAlign,
    shape: props.AppButtonsShape,
  };
  const logo = {
    OnDeskTopView: props["Logo.OnDeskTopView"],
    Size: props["Logo.Size"],
    DeskTopViewLeftSideLogo: props["Logo.DeskTopViewLeftSideLogo"],
  };
  const title = {
    FontSize: props["Title.FontSize"],
    Level: props["Title.Level"],
    TextTransForm: props["Title.TextTransForm"],
  };
  const subTitle = {
    FontSize: props["SubTitle.FontSize"],
    Level: props["SubTitle.Level"],
    TextTransForm: props["SubTitle.TextTransForm"],
  };
  const orderNow = {
    HoverTextColor: props["OrderNow.HoverTextColor"],
    Size: props["OrderNow.Size"],
    Shape: props["OrderNow.Shape"],
    Border: props["OrderNow.Border"],
    BorderColor: props["OrderNow.BorderColor"],
    Rounded: props["OrderNow.Rounded"],
    TextTransform: props["OrderNow.TextTransform"],
  };
  const reserveNow = {
    BackGroundColor: props["ReserveNow.BackGroundColor"],
    TextColor: props["ReserveNow.TextColor"],
    Size: props["ReserveNow.Size"],
    Shape: props["ReserveNow.Shape"],
    Border: props["ReserveNow.Border"],
    BorderColor: props["ReserveNow.BorderColor"],
    Rounded: props["ReserveNow.Rounded"],
    TextTransform: props["ReserveNow.TextTransform"],
  };

  const titleTag = `h${title.Level}` as keyof React.JSX.IntrinsicElements;
  const subtitleTag = `h${subTitle.Level}` as keyof React.JSX.IntrinsicElements;

  const sectionStyle: React.CSSProperties = {
    backgroundImage: `url(${BackGroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: PrimaryColor,
    boxShadow: props.BgShadowOnDeskTop
      ? "0 4px 12px rgba(0,0,0,0.3)"
      : undefined,
  };

  return (
    <section
      style={sectionStyle}
      className="relative w-full h-screen flex flex-col justify-center items-center p-8"
    >
      {logo.OnDeskTopView && (
        <img
          src={props.LogoUrl}
          alt="Logo"
          className={cx(
            LogoSizeToClass(logo.Size),
            logo.DeskTopViewLeftSideLogo ? "float-left mr-4" : "mx-auto block",
          )}
        />
      )}

      {React.createElement(
        titleTag,
        {
          className: cx(
            TextSizeToClass(title.FontSize),
            title.TextTransForm ? "uppercase" : "",
            AlignClass(Align),
            AlignMobileClass(AlignMobileView),
            `text-[${SecondaryColor}]`,
            "font-bold mb-2",
          ),
        },
        "Your Hero Title",
      )}

      {React.createElement(
        subtitleTag,
        {
          className: cx(
            TextSizeToClass(subTitle.FontSize),
            subTitle.TextTransForm ? "uppercase" : "",
            AlignClass(Align),
            AlignMobileClass(AlignMobileView),
            `text-[${SecondaryColor}]`,
            "mb-6",
          ),
        },
        "Your Subtitle Text",
      )}

      <div
        className={cx("flex space-x-4", {
          "justify-start": appButtons.align === "left",
          "justify-center": appButtons.align === "center",
          "justify-end": appButtons.align === "right",
        })}
      >
        <button
          style={{ borderColor: orderNow.BorderColor, color: SecondaryColor }}
          className={cx(
            BorderWidthClass(orderNow.Border),
            ButtonSizeClass(orderNow.Size),
            ButtonShapeClass(orderNow.Shape, orderNow.Rounded),
            orderNow.TextTransform ? "uppercase" : "",
            "border transition-colors duration-300",
          )}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = orderNow.HoverTextColor)
          }
          onMouseLeave={(e) => (e.currentTarget.style.color = SecondaryColor)}
        >
          Order Now
        </button>

        <button
          style={{
            backgroundColor: reserveNow.BackGroundColor,
            color: reserveNow.TextColor,
            borderColor: reserveNow.BorderColor,
          }}
          className={cx(
            BorderWidthClass(reserveNow.Border),
            ButtonSizeClass(reserveNow.Size),
            ButtonShapeClass(reserveNow.Shape, reserveNow.Rounded),
            reserveNow.TextTransform ? "uppercase" : "",
            "border transition-colors duration-300",
          )}
        >
          Reserve Now
        </button>
      </div>
    </section>
  );
}

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

export interface ContactInfoProps {
  PrimaryColor: string;
  SecondaryColor: string;
  GapFromTop: number;
  GapFromBottom: number;
  Layout: "stacked" | "Row" | "Cards";
  HeadingText: string;
  HeadingSize: "sm" | "md" | "lg" | "xl" | "2xl";
  HeadingWeight: "1" | "2" | "3" | "4" | "5" | "6";
  ShowPhone: boolean;
  ShowEmail: boolean;
  ShowAddres: boolean;
  ShowSocials: boolean;
}

export function ContactInfo({
  PrimaryColor = "#ffffff",
  SecondaryColor = "#000000",
  GapFromTop = 0,
  GapFromBottom = 0,
  Layout = "stacked",
  HeadingText = "Contact Us",
  HeadingSize = "lg",
  HeadingWeight = "4",
  ShowPhone = true,
  ShowEmail = true,
  ShowAddres = true,
  ShowSocials = true,
}: ContactInfoProps) {
  const headingSizeClass = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
    "2xl": "text-3xl",
  };

  const headingWeightClass = {
    "1": "font-thin",
    "2": "font-light",
    "3": "font-normal",
    "4": "font-medium",
    "5": "font-semibold",
    "6": "font-bold",
  };

  const layoutClass = cx({
    "flex flex-col space-y-4": Layout === "stacked",
    "flex flex-row space-x-8": Layout === "Row",
    "grid grid-cols-1 md:grid-cols-3 gap-6": Layout === "Cards",
  });

  const cardClass =
    Layout === "Cards" ? "p-4 border rounded-lg shadow-sm text-center" : "";

  return (
    <section
      style={{
        marginTop: GapFromTop,
        marginBottom: GapFromBottom,
        backgroundColor: PrimaryColor,
        color: SecondaryColor,
      }}
      className="px-6 py-8"
    >
      {/* Heading */}
      <h2
        className={cx(
          "mb-6",
          headingSizeClass[HeadingSize],
          headingWeightClass[HeadingWeight],
        )}
      >
        {HeadingText}
      </h2>

      {/* Content */}
      <div className={layoutClass}>
        {ShowPhone && (
          <div className={cardClass}>
            <p className="font-semibold">Phone</p>
            <p>+1 (555) 123-4567</p>
          </div>
        )}

        {ShowEmail && (
          <div className={cardClass}>
            <p className="font-semibold">Email</p>
            <p>contact@example.com</p>
          </div>
        )}

        {ShowAddres && (
          <div className={cardClass}>
            <p className="font-semibold">Address</p>
            <p>123 Main Street, City</p>
          </div>
        )}

        {ShowSocials && (
          <div className={cardClass}>
            <p className="font-semibold">Social</p>
            <div className="flex justify-center space-x-4 mt-2">
              <span>🔵 abcdefghijklmnop</span>
              <span>🐦 abcdefghijklmnop</span>
              <span>📸 abcdefghijklmnop</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export interface OpeningHoursProps {
  PrimaryColor: string;
  SecondaryColor: string;
  GapFromTop: number;
  GapFromBottom: number;
  DisplaySize: "Table" | "List";
  ShowClosedDays: boolean;
  HeadingText: string;
  HeadingSize: "sm" | "md" | "lg" | "xl" | "2xl";
  HeadingWeight: "1" | "2" | "3" | "4" | "5" | "6";
}
const openingHoursData = [
  { day: "MONDAY", time: "10:00-23:59" },
  { day: "TUESDAY", time: "00:00-23:59" },
  { day: "WEDNESDAY", time: "09:00-23:00" },
  { day: "THURSDAY", time: "00:00-23:59" },
  { day: "FRIDAY", time: "09:00-15:00" },
  { day: "SATURDAY", time: "05:00-23:59" },
  { day: "SUNDAY", time: "05:00-06:00" },
];
export function OpeningHours(props: OpeningHoursProps) {
  return (
    <section
      style={{
        marginTop: props.GapFromTop,
        marginBottom: props.GapFromBottom,
      }}
    >
      <h2
        style={{
          color: props.PrimaryColor,
          fontWeight: props.HeadingWeight,
        }}
        className={`text-${props.HeadingSize} text-center mb-6`}
      >
        {props.HeadingText}
      </h2>

      <div className="max-w-xl mx-auto">
        {openingHoursData.map((item) => (
          <div
            key={item.day}
            className="flex justify-between border-b py-3"
            style={{ color: props.SecondaryColor }}
          >
            <span>{item.day}</span>
            <span>{item.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export interface EventSectionProps {
  PrimaryColor: string;
  SecondaryColor: string;
  GapFromTop: number;
  GapFromBottom: number;
  Columns: number;
  CardShape: "square" | "rounded" | "pill";
  ShowDate: boolean;
  MaxItems: number;
  HeadingText: string;
  HeadingSize: "sm" | "md" | "lg" | "xl" | "2xl";
  HeadingWeight: "1" | "2" | "3" | "4" | "5" | "6";
}

const events = [
  {
    date: "Sat, Mar 1 · 7pm",
    title: "Live Jazz Night",
    description: "Enjoy live jazz while savoring our special evening menu.",
  },
  {
    date: "Fri, Mar 7 · 6:30pm",
    title: "Wine Tasting Evening",
    description: "Explore curated wines paired with seasonal appetisers.",
  },
  {
    date: "Sun, Mar 15 · 5pm",
    title: "Chef's Table Experience",
    description: "An intimate 6-course dinner with our executive chef.",
  },
];

export function EventSection(props: EventSectionProps) {
  const borderRadius =
    props.CardShape === "square"
      ? "0px"
      : props.CardShape === "rounded"
        ? "12px"
        : "999px";

  const visibleEvents = events.slice(0, props.MaxItems);

  return (
    <section
      style={{
        marginTop: props.GapFromTop,
        marginBottom: props.GapFromBottom,
      }}
    >
      <h2
        className={`text-${props.HeadingSize} font-${props.HeadingWeight} text-center mb-10`}
        style={{ color: props.PrimaryColor }}
      >
        {props.HeadingText}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${props.Columns}, 1fr)`,
          gap: "24px",
        }}
      >
        {visibleEvents.map((event, index) => (
          <div
            key={index}
            style={{
              borderRadius,
              background: "#f5f5f5",
              overflow: "hidden",
              border: "1px solid #e5e5e5",
            }}
          >
            <div
              style={{
                height: "140px",
                background: "#eee6da",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              📅
            </div>

            <div style={{ padding: "16px", color: props.SecondaryColor }}>
              {props.ShowDate && (
                <p style={{ fontSize: "12px", marginBottom: "6px" }}>
                  {event.date}
                </p>
              )}

              <h3 style={{ fontWeight: 600 }}>{event.title}</h3>

              <p style={{ fontSize: "14px", marginTop: "6px" }}>
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "13px",
          color: "#888",
        }}
      >
        Live events from your events calendar will appear here
      </p>
    </section>
  );
}

function LogoSizeToClass(size: "sm" | "md" | "lg") {
  switch (size) {
    case "sm":
      return "h-8 w-auto";
    case "md":
      return "h-12 w-auto";
    case "lg":
      return "h-20 w-auto";
    default:
      return "";
  }
}

function TextSizeToClass(size: "sm" | "md" | "lg" | "xl" | "2xl") {
  switch (size) {
    case "sm":
      return "text-sm";
    case "md":
      return "text-base";
    case "lg":
      return "text-lg";
    case "xl":
      return "text-xl";
    case "2xl":
      return "text-2xl";
    default:
      return "";
  }
}

function AlignClass(align: boolean) {
  return align ? "text-center" : "text-left";
}

function AlignMobileClass(alignMobile: boolean) {
  return alignMobile ? "md:text-center" : "md:text-left";
}

function ButtonSizeClass(size: "sm" | "md" | "lg") {
  switch (size) {
    case "sm":
      return "px-3 py-1 text-sm";
    case "md":
      return "px-5 py-2 text-base";
    case "lg":
      return "px-7 py-3 text-lg";
    default:
      return "";
  }
}

function ButtonShapeClass(shape: boolean, rounded: "sm" | "md" | "lg") {
  if (!shape) return "rounded-none";
  switch (rounded) {
    case "sm":
      return "rounded-sm";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
    default:
      return "";
  }
}

function BorderWidthClass(border: "1" | "2" | "3" | "4" | "5") {
  switch (border) {
    case "1":
      return "border";
    case "2":
      return "border-2";
    case "3":
      return "border-4";
    case "4":
      return "border-4";
    case "5":
      return "border-8";
    default:
      return "";
  }
}
