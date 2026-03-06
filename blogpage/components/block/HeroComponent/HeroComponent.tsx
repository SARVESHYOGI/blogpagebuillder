import { cx } from "class-variance-authority";
import {
  AlignClass,
  AlignMobileClass,
  BorderWidthClass,
  ButtonShapeClass,
  ButtonSizeClass,
  LogoSizeToClass,
  TextSizeToClass,
} from "../../../functions";
import React from "react";

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
