import { cx } from "class-variance-authority";
import React from "react";
import { data } from "../../../db";
export interface HeroProps {
  PrimaryColor: string;
  SecondaryColor: string;

  Align: boolean;
  AlignMobileView: boolean;

  AppButtons: {
    Align: "left" | "center" | "right" | "after-buttons";
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
  const fontWeightMap: Record<number, string> = {
    1: "font-extrabold",
    2: "font-bold",
    3: "font-semibold",
    4: "font-medium",
    5: "font-normal",
    6: "font-light",
  };
  return (
    <section
      className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {props.BgShadowOnDeskTop && (
        <div className="absolute inset-0 bg-black/30"></div>
      )}

      <div
        className={cx(
          "relative z-10 container mx-auto px-6 py-12",
          props.Align && "text-center",
          !props.Align && "text-left",
          props.AlignMobileView ? "text-center" : "text-left",
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
            fontWeightMap[props.Title?.level || 1],
            props.Title?.fontSize === "L" && "text-5xl",
            props.Title?.fontSize === "M" && "text-4xl",
            props.Title?.fontSize === "S" && "text-3xl",

            props.Title?.textTransform && "uppercase",
          )}
          style={{ color: props.PrimaryColor }}
        >
          {data.name}
        </TitleTag>

        {/* Subtitle */}
        <SubTitleTag
          className={cx(
            "mt-2 text-gray-200",
            fontWeightMap[props.SubTitle?.level || 2],
            props.SubTitle?.fontSize === "L" && "text-2xl",
            props.SubTitle?.fontSize === "M" && "text-lg",
            props.SubTitle?.fontSize === "S" && "text-base",
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
        {props.AppButtons.Align === "after-buttons" && (
          <div className={cx("flex gap-3 mt-6 items-center")}>
            <img src="/assets/playstore.png" className="w-10" />
            <img src="/assets/applestore.png" className="w-10" />
          </div>
        )}
      </div>
      {props.AppButtons.Align !== "after-buttons" && (
        <div
          className={cx(
            "absolute bottom-6 left-0 w-full px-6 flex gap-3 z-10",
            props.AppButtons.Align === "left" && "justify-start",
            props.AppButtons.Align === "center" && "justify-center",
            props.AppButtons.Align === "right" && "justify-end",
          )}
        >
          <img src="/assets/playstore.png" className="w-10" />
          <img src="/assets/applestore.png" className="w-10" />
        </div>
      )}
    </section>
  );
};
