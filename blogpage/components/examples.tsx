import { cx } from "class-variance-authority";
import {
  AlignClass,
  AlignMobileClass,
  BorderWidthClass,
  ButtonShapeClass,
  ButtonSizeClass,
  LogoSizeToClass,
  TextSizeToClass,
} from "../functions";

import React, { useState } from "react";

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

export interface LocationMapProps {
  GapFromTop: number;
  GapFromBottom: number;
  GoogleMapsEmbedUrl: string;
  MapHeight: "300" | "400" | "500";
  BorderRadius: "small" | "medium" | "large";
}

export function LocationMap(props: LocationMapProps) {
  const heightClass = {
    "300": "h-[300px]",
    "400": "h-[400px]",
    "500": "h-[500px]",
  };

  const borderRadiusClass = {
    small: "rounded-sm",
    medium: "rounded-md",
    large: "rounded-lg",
  };

  return (
    <div
      style={{
        marginTop: props.GapFromTop,
        marginBottom: props.GapFromBottom,
      }}
      className={cx(
        "overflow-hidden w-full",
        heightClass[props.MapHeight],
        borderRadiusClass[props.BorderRadius],
      )}
    >
      <iframe
        src={props.GoogleMapsEmbedUrl}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

export interface CateringCTAProps {
  PrimaryColor: string;
  SecondaryColor: string;
  GapFromTop: number;
  GapFromBottom: number;
  Layout: "Centered" | "Split";
  BackgroundStyle: "Solid" | "Gradient";
  HeadingText: string;
  HeadingSize: "sm" | "md" | "lg" | "xl" | "2xl";
  HeadingWeight: "1" | "2" | "3" | "4" | "5" | "6";
  SubText: string;
  CTAButtonText: string;
  CTAButtonURL: string;
  ButtonShape: "rounded" | "pill";
}
export function CateringCTA(props: CateringCTAProps) {
  const headingSizeClass = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
    "2xl": "text-4xl",
  };

  const headingWeightClass = {
    "1": "font-thin",
    "2": "font-light",
    "3": "font-normal",
    "4": "font-medium",
    "5": "font-semibold",
    "6": "font-bold",
  };

  const buttonShapeClass = {
    rounded: "rounded-md",
    pill: "rounded-full",
  };

  const layoutClass = {
    Centered: "text-center items-center",
    Split: "text-left items-start flex-row justify-between",
  };

  const backgroundStyle =
    props.BackgroundStyle === "Gradient"
      ? {
          background: `linear-gradient(135deg, ${props.PrimaryColor}, ${props.SecondaryColor})`,
        }
      : {
          background: props.PrimaryColor,
        };

  return (
    <section
      style={{
        marginTop: props.GapFromTop,
        marginBottom: props.GapFromBottom,
        ...backgroundStyle,
      }}
      className="w-full py-16 px-6 flex justify-center"
    >
      <div
        className={cx(
          "max-w-4xl w-full flex flex-col gap-4",
          layoutClass[props.Layout],
        )}
      >
        <h2
          className={cx(
            headingSizeClass[props.HeadingSize],
            headingWeightClass[props.HeadingWeight],
            "text-black",
          )}
        >
          {props.HeadingText}
        </h2>

        <p className="text-sm text-black/70 max-w-xl">{props.SubText}</p>

        <div>
          <a
            href={props.CTAButtonURL}
            className={cx(
              "inline-block px-6 py-3 mt-4 font-medium text-white transition",
              buttonShapeClass[props.ButtonShape],
            )}
            style={{ backgroundColor: props.SecondaryColor }}
          >
            {props.CTAButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}

export interface FAQItem {
  Question: string;
  Answer: string;
}

export interface FAQSectionProps {
  PrimaryColor: string;
  SecondaryColor: string;
  HeadingText: string;
  HeadingSize: "sm" | "md" | "lg" | "xl" | "2xl";
  HeadingWeight: "1" | "2" | "3" | "4" | "5" | "6";
  GapFromTop: number;
  GapFromBottom: number;
  DisplayStyle: "Accordion" | "List" | "Simple";
  FAQItems: FAQItem[];
}

export function FAQSection(props: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const headingSizeClass = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
    "2xl": "text-4xl",
  };

  const headingWeightClass = {
    "1": "font-thin",
    "2": "font-light",
    "3": "font-normal",
    "4": "font-medium",
    "5": "font-semibold",
    "6": "font-bold",
  };

  return (
    <section
      style={{
        marginTop: props.GapFromTop,
        marginBottom: props.GapFromBottom,
      }}
      className="w-full py-16 px-6 flex flex-col items-center"
    >
      <h2
        className={cx(
          "mb-8 text-center",
          headingSizeClass[props.HeadingSize],
          headingWeightClass[props.HeadingWeight],
        )}
      >
        {props.HeadingText}
      </h2>

      <div className="w-full max-w-3xl space-y-4">
        {props.FAQItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={cx(
                  "w-full text-left px-6 py-4 flex justify-between items-center font-medium",
                  isOpen && "text-white",
                )}
                style={{
                  backgroundColor: isOpen ? props.PrimaryColor : "white",
                }}
              >
                {item.Question}
                <span>{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div
                  className="px-6 py-4"
                  style={{ backgroundColor: props.SecondaryColor }}
                >
                  {item.Answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export interface AppSectionProps {
  primaryColor: string;
  secondaryColor: string;
  gapFromTop: number;
  gapFromBottom: number;

  background: "Template1" | "Template2";

  heading: {
    size: "L" | "M" | "S";
    level: "1" | "2" | "3" | "4" | "5" | "6";
    textTransform: "lowercase" | "uppercase";
  };

  descriptionSize: "S" | "M" | "L" | "XL" | "2XL";
  shopNameSize: "S" | "M" | "L" | "XL" | "2XL";
  shopDescriptionSize: "S" | "M" | "L";

  alignDownloadAppText: "left" | "center";

  appButtons: "rounded" | "square";
  appButtonsSize: "S" | "M" | "L";

  alignMobileFrame: "start" | "end";
  alignMobileFrameData: "left" | "center";

  orderNowButton: {
    textColor: string;
    shape: "square" | "rounded";
  };

  reserveNowButton: {
    backgroundColor: string;
    textColor: string;
    shape: "square" | "rounded";
  };
}

export function AppSection(props: AppSectionProps) {
  const headingSize = {
    L: "text-4xl",
    M: "text-3xl",
    S: "text-2xl",
  };

  const descriptionSize = {
    S: "text-sm",
    M: "text-base",
    L: "text-lg",
    XL: "text-xl",
    "2XL": "text-2xl",
  };

  const buttonSize = {
    S: "h-8",
    M: "h-10",
    L: "h-12",
  };

  const buttonShape = {
    rounded: "rounded-md",
    square: "rounded-none",
  };

  const alignText = {
    left: "text-left items-start",
    center: "text-center items-center",
  };

  const mobileFrameAlign = {
    start: "justify-start",
    end: "justify-end",
  };

  return (
    <section
      style={{
        marginTop: props.gapFromTop,
        marginBottom: props.gapFromBottom,
        background: props.primaryColor,
      }}
      className="w-full py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12 items-center">
        {/* PHONE MOCKUP */}
        <div className={cx("flex", mobileFrameAlign[props.alignMobileFrame])}>
          <img src="/mobile-frame.png" className="w-[260px]" />
        </div>

        {/* CONTENT */}
        <div
          className={cx(
            "flex flex-col gap-6",
            alignText[props.alignDownloadAppText],
          )}
        >
          <h2
            className={cx(headingSize[props.heading.size], "font-bold")}
            style={{ color: props.secondaryColor }}
          >
            Download the App!
          </h2>

          <p className={descriptionSize[props.descriptionSize]}>
            We want to make it easy and convenient for people like you to order
            from the comfort of your own home. What are you waiting for? It’s
            time for us to connect.
          </p>

          {/* STORE BUTTONS */}
          <div className="flex gap-4">
            <img
              src="/google-play.png"
              className={cx(
                buttonSize[props.appButtonsSize],
                buttonShape[props.appButtons],
              )}
            />

            <img
              src="/app-store.png"
              className={cx(
                buttonSize[props.appButtonsSize],
                buttonShape[props.appButtons],
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export interface MenuDetailsProps {
  primaryColor: string;
  secondaryColor: string;

  gapFromTop: number;
  gapFromBottom: number;

  backgroundImage: "show" | "hide";

  topSection: {
    gapTopAndBottom: number;
    headingSize: "L" | "M" | "S";
    headingLevel: "1" | "2" | "3" | "4";
    headingTextTransform: "lowercase" | "uppercase";

    categoryBgColor: string;
    categoryTextColor: string;

    categoryButtonSize: "L" | "M" | "S";
    categoryButtonShape: "square" | "rounded";
  };

  productSection: {
    bgColor: string;
    textColor: string;

    categoryImageShape: "square" | "rounded";

    categoryText: "with image" | "after image";
    categoryTextTransform: "lowercase" | "uppercase";

    alignCategoryText: "left" | "center";
    alignProductsText: "left" | "center";

    categoryNameFontSize: "2XL" | "3XL" | "4XL";
    productNameFontSize: "L" | "XL";

    productsBorder: "0" | "1" | "2" | "3" | "4";

    productTextColor: string;
  };

  orderNowButton: {
    backgroundColor: string;
    textColor: string;
    hoverTextColor: string;

    size: "L" | "M" | "S";
    shape: "square" | "rounded";

    borderRadius: "L" | "M" | "S";
    border: "0" | "1" | "2" | "3" | "4";
    borderColor: string;
  };
}
export function MenuDetails(props: MenuDetailsProps) {
  const headingSize = {
    L: "text-4xl",
    M: "text-3xl",
    S: "text-2xl",
  };

  const buttonSize = {
    L: "px-6 py-3",
    M: "px-4 py-2",
    S: "px-3 py-1",
  };

  const buttonShape = {
    rounded: "rounded-full",
    square: "rounded-none",
  };

  const alignText = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <section
      style={{
        marginTop: props.gapFromTop,
        marginBottom: props.gapFromBottom,
      }}
      className="w-full"
    >
      {/* TOP SECTION */}
      <div
        style={{ background: props.primaryColor }}
        className="py-10 px-6 text-center"
      >
        <h2
          className={headingSize[props.topSection.headingSize]}
          style={{
            textTransform: props.topSection.headingTextTransform,
          }}
        >
          Creativity is always on our menu
        </h2>

        {/* CATEGORY BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["Salads", "Starters", "Soups", "Thali", "Curries"].map((cat, i) => (
            <button
              key={i}
              style={{
                background: props.topSection.categoryBgColor,
                color: props.topSection.categoryTextColor,
              }}
              className={cx(
                buttonSize[props.topSection.categoryButtonSize],
                buttonShape[props.topSection.categoryButtonShape],
                "border border-black",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div
        style={{ background: props.productSection.bgColor }}
        className="py-12 px-6"
      >
        <div className="max-w-5xl mx-auto">
          {/* CATEGORY IMAGE */}
          {props.backgroundImage === "show" && (
            <img
              src="/menu-banner.jpg"
              className={cx(
                "w-full mb-8",
                props.productSection.categoryImageShape === "rounded"
                  ? "rounded-lg"
                  : "rounded-none",
              )}
            />
          )}

          {/* PRODUCTS */}
          <div
            className={cx(
              "grid grid-cols-2 gap-8",
              alignText[props.productSection.alignProductsText],
            )}
          >
            {[1, 2, 3, 4].map((p, i) => (
              <div key={i} className="border-b pb-4">
                <h3 className="font-semibold text-xl">Salades</h3>
                <p className="text-sm">
                  green peas and potatoes and fresh vegetables
                </p>
              </div>
            ))}
          </div>

          {/* ORDER BUTTON */}
          <div className="flex justify-center mt-10">
            <button
              style={{
                background: props.orderNowButton.backgroundColor,
                color: props.orderNowButton.textColor,
                borderColor: props.orderNowButton.borderColor,
              }}
              className={cx(
                buttonSize[props.orderNowButton.size],
                buttonShape[props.orderNowButton.shape],
                "border font-semibold",
              )}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
