import { ComponentConfig } from "@puckeditor/core";
import { Footer, FooterProps } from "./Footer";

export const FooterBlock: ComponentConfig<
  React.PropsWithChildren<FooterProps>
> = {
  fields: {
    PrimaryColor: { type: "text" },
    SecondaryColor: { type: "text" },
    GapFromTop: { type: "number" },
    GapFromBottom: { type: "number" },
    Layout: {
      type: "select",
      options: [
        { label: "Columns", value: "Columns" },
        { label: "Simple", value: "Simple" },
      ],
    },
    ShowLogo: {
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    ShowSocials: {
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    ShowContact: {
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    Logo: { type: "text" },

    // links is an array of objects with label and href
    links: {
      type: "array",
      arrayFields: {
        label: { type: "text" },
        href: { type: "text" },
      },
    },

    CopyrightText: { type: "text" },
  },
  defaultProps: {
    PrimaryColor: "#000000",
    SecondaryColor: "#ffffff",
    GapFromTop: 0,
    GapFromBottom: 0,
    Layout: "Simple",
    ShowLogo: false,
    ShowSocials: false,
    ShowContact: false,
    Logo: "/logo.png",
    links: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
    ],
    CopyrightText: "© 2026 Your Company",
  },
  render(props) {
    return <Footer {...props} />;
  },
};
