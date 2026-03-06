import { ComponentConfig, DropZone } from "@puckeditor/core";
import { HeroComponent, HeroProps } from "./HeroComponent";

export const HeroComponentBlock: ComponentConfig<
  React.PropsWithChildren<HeroProps>
> = {
  fields: {
    PrimaryColor: { type: "text", label: "Primary Background Color" },
    SecondaryColor: { type: "text", label: "Text / Accent Color" },
    Align: {
      type: "radio",
      label: "Center Title & Subtitle?",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    AlignMobileView: {
      type: "radio",
      label: "Center on Mobile?",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },

    // AppButtons
    AppButtonsAlign: {
      type: "select",
      label: "Buttons Alignment",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
    AppButtonsShape: {
      type: "select",
      label: "Buttons Shape",
      options: [
        { label: "Square", value: "square" },
        { label: "Rounded", value: "rounded" },
        { label: "Pill", value: "pill" },
      ],
    },

    BackGroundImage: { type: "text", label: "Background Image URL" },
    LogoUrl: { type: "text", label: "Logo Image URL" },

    // Logo
    "Logo.OnDeskTopView": {
      type: "radio",
      label: "Show Logo on Desktop?",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    "Logo.Size": {
      type: "select",
      label: "Logo Size",
      options: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
      ],
    },
    "Logo.DeskTopViewLeftSideLogo": {
      type: "radio",
      label: "Logo on Left Side on Desktop?",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },

    BgShadowOnDeskTop: {
      type: "radio",
      label: "Enable Shadow on Desktop?",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },

    // Title
    "Title.FontSize": {
      type: "select",
      label: "Title Font Size",
      options: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
      ],
    },
    "Title.Level": {
      type: "select",
      label: "Title Heading Level",
      options: [
        { label: "H1", value: "1" },
        { label: "H2", value: "2" },
        { label: "H3", value: "3" },
        { label: "H4", value: "4" },
        { label: "H5", value: "5" },
        { label: "H6", value: "6" },
      ],
    },
    "Title.TextTransForm": {
      type: "radio",
      label: "Uppercase Title?",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },

    // SubTitle
    "SubTitle.FontSize": {
      type: "select",
      label: "Subtitle Font Size",
      options: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
        { label: "XL", value: "xl" },
        { label: "2XL", value: "2xl" },
      ],
    },
    "SubTitle.Level": {
      type: "select",
      label: "Subtitle Heading Level",
      options: [
        { label: "H1", value: "1" },
        { label: "H2", value: "2" },
        { label: "H3", value: "3" },
        { label: "H4", value: "4" },
        { label: "H5", value: "5" },
        { label: "H6", value: "6" },
      ],
    },
    "SubTitle.TextTransForm": {
      type: "radio",
      label: "Uppercase Subtitle?",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },

    // Order Now Button
    "OrderNow.HoverTextColor": {
      type: "text",
      label: "Order Now Hover Text Color",
    },
    "OrderNow.Size": {
      type: "select",
      label: "Order Now Button Size",
      options: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
      ],
    },
    "OrderNow.Shape": {
      type: "radio",
      label: "Round Order Now Button?",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    "OrderNow.Border": {
      type: "select",
      label: "Order Now Border Width",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
      ],
    },
    "OrderNow.BorderColor": {
      type: "text",
      label: "Order Now Border Color",
    },
    "OrderNow.Rounded": {
      type: "select",
      label: "Order Now Border Radius",
      options: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
      ],
    },
    "OrderNow.TextTransform": {
      type: "radio",
      label: "Uppercase Order Now?",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },

    // Reserve Now Button
    "ReserveNow.BackGroundColor": {
      type: "text",
      label: "Reserve Now Background Color",
    },
    "ReserveNow.TextColor": {
      type: "text",
      label: "Reserve Now Text Color",
    },
    "ReserveNow.Size": {
      type: "select",
      label: "Reserve Now Button Size",
      options: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
      ],
    },
    "ReserveNow.Shape": {
      type: "radio",
      label: "Round Reserve Now Button?",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    "ReserveNow.Border": {
      type: "select",
      label: "Reserve Now Border Width",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
      ],
    },
    "ReserveNow.BorderColor": {
      type: "text",
      label: "Reserve Now Border Color",
    },
    "ReserveNow.Rounded": {
      type: "select",
      label: "Reserve Now Border Radius",
      options: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
      ],
    },
    "ReserveNow.TextTransform": {
      type: "radio",
      label: "Uppercase Reserve Now?",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
  },

  defaultProps: {
    PrimaryColor: "#ffffff",
    SecondaryColor: "#1a202c",
    Align: true,
    AlignMobileView: true,
    AppButtonsAlign: "center",
    AppButtonsShape: "pill",
    BackGroundImage: "",
    LogoUrl: "/logo.png",
    "Logo.OnDeskTopView": true,
    "Logo.Size": "md",
    "Logo.DeskTopViewLeftSideLogo": true,
    BgShadowOnDeskTop: true,
    "Title.FontSize": "lg",
    "Title.Level": "1",
    "Title.TextTransForm": false,
    "SubTitle.FontSize": "xl",
    "SubTitle.Level": "2",
    "SubTitle.TextTransForm": false,
    "OrderNow.HoverTextColor": "#ffffff",
    "OrderNow.Size": "md",
    "OrderNow.Shape": true,
    "OrderNow.Border": "2",
    "OrderNow.BorderColor": "#000000",
    "OrderNow.Rounded": "md",
    "OrderNow.TextTransform": false,
    "ReserveNow.BackGroundColor": "#000000",
    "ReserveNow.TextColor": "#ffffff",
    "ReserveNow.Size": "md",
    "ReserveNow.Shape": true,
    "ReserveNow.Border": "2",
    "ReserveNow.BorderColor": "#000000",
    "ReserveNow.Rounded": "md",
    "ReserveNow.TextTransform": false,
  },

  render(props: HeroProps) {
    return (
      <HeroComponent {...props}>
        <DropZone zone="hero" />
      </HeroComponent>
    );
  },
};
