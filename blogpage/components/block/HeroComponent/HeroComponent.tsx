import { cx } from "class-variance-authority";
import React from "react";
import { data } from "../../../db";
export interface HeroProps {
  PrimaryColor: string;
  SecondaryColor: string;

  Align: boolean;
  AlignMobileView: boolean;

  AppButtons: {
    Align: "left" | "center" | "right";
    Shape: boolean;
  };

  Logo: {
    onDeskTopView: boolean;
    size: "L" | "M" | "S";
    desktopViewLeftSideLogo: boolean;
  };
  BgShadowOnDeskTop: boolean;
  Title: {
    fontSize: "L" | "M" | "S";
    level: 1 | 2 | 3 | 4 | 5 | 6;
    textTransform: boolean;
  };
  SubTitle: {
    fontSize: "L" | "M" | "S";
    level: 1 | 2 | 3 | 4 | 5 | 6;
    textTransform: boolean;
  };
  OrderNow: {
    hoverTextColor: string;
    size: "sm" | "md" | "lg";
    shape: "square" | "rounded";
    border: "1" | "2" | "3";
    borderColor: string;
    rounded: "sm" | "md" | "lg";
    textTransform: boolean;
  };
  ReserveNow: {
    hoverTextColor: string;
    size: "sm" | "md" | "lg";
    shape: "square" | "rounded";
    border: "1" | "2" | "3";
    borderColor: string;
    rounded: "sm" | "md" | "lg";
    textTransform: boolean;
  };
}

const bgImage = data.shop_images[1].uri;
const logo = data.shop_images[0].uri;

export const HeroComponent: React.FC<HeroProps> = (props) => {
  const TitleTag =
    `h${props.Title?.level || 1}` as keyof React.JSX.IntrinsicElements;
  const SubTitleTag =
    `h${props.SubTitle?.level || 2}` as keyof React.JSX.IntrinsicElements;

  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {props.BgShadowOnDeskTop && (
        <div className="absolute inset-0 bg-black/30"></div>
      )}

      <div
        className={cx(
          "relative z-10 container mx-auto px-6",
          props.Align && "text-center",
          !props.Align && "text-left",
        )}
      >
        {/* Logo */}
        {props.Logo?.onDeskTopView && (
          <div
            className={cx(
              "flex items-center mb-4",
              props.Logo.desktopViewLeftSideLogo
                ? "justify-start"
                : "justify-center",
            )}
          >
            <img
              src={logo}
              className={cx(
                props.Logo.size === "L" && "w-20",
                props.Logo.size === "M" && "w-14",
                props.Logo.size === "S" && "w-10",
              )}
            />
          </div>
        )}

        {/* Title */}
        <TitleTag
          className={cx(
            "font-bold",
            props.Title?.fontSize === "L" && "text-5xl",
            props.Title?.fontSize === "M" && "text-4xl",
            props.Title?.fontSize === "S" && "text-3xl",

            props.Title?.textTransform && "uppercase",
          )}
          style={{ color: props.PrimaryColor }}
        >
          Test Dev Shop
        </TitleTag>

        {/* Subtitle */}
        <SubTitleTag
          className={cx(
            "mt-2 text-gray-200",
            props.SubTitle?.fontSize === "L" && "text-xl",
            props.SubTitle?.fontSize === "M" && "text-lg",
            props.SubTitle?.fontSize === "S" && "text-md",
            props.SubTitle?.textTransform && "uppercase",
          )}
          style={{ color: props.SecondaryColor }}
        >
          Asian Fine Dining & Outdoor Shisha Lounge in USA Lounge in USA
        </SubTitleTag>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          {/* Order Now */}
          <button
            className={cx(
              "px-6 py-3 font-semibold transition",
              props.OrderNow?.size === "sm" && "text-sm",
              props.OrderNow?.size === "md" && "text-base",
              props.OrderNow?.size === "lg" && "text-lg",
              props.OrderNow?.rounded === "sm" && "rounded",
              props.OrderNow?.rounded === "md" && "rounded-md",
              props.OrderNow?.rounded === "lg" && "rounded-lg",
            )}
            style={{
              background: props.PrimaryColor,
              border: `${props.OrderNow?.border}px solid ${props.OrderNow?.borderColor}`,
            }}
          >
            Order Now
          </button>

          {/* Reserve Now */}
          <button
            className={cx(
              "px-6 py-3 font-semibold bg-white transition",
              props.ReserveNow?.size === "sm" && "text-sm",
              props.ReserveNow?.size === "md" && "text-base",
              props.ReserveNow?.size === "lg" && "text-lg",
              props.ReserveNow?.rounded === "sm" && "rounded",
              props.ReserveNow?.rounded === "md" && "rounded-md",
              props.ReserveNow?.rounded === "lg" && "rounded-lg",
            )}
            style={{
              border: `${props.ReserveNow?.border}px solid ${props.ReserveNow?.borderColor}`,
            }}
          >
            Reserve Now
          </button>
        </div>

        {/* App Store Buttons */}
        <div
          className={cx(
            "flex gap-3 mt-6",
            props.AppButtons?.Align === "left" && "justify-start",
            props.AppButtons?.Align === "center" && "justify-center",
            props.AppButtons?.Align === "right" && "justify-end",
          )}
        >
          <img src="/playstore.png" className="w-10" />
          <img src="/applestore.png" className="w-10" />
        </div>
      </div>
    </section>
  );
};
