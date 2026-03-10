import { ComponentConfig } from "@puckeditor/core";
import { Footer, FooterProps } from "./Footer";
import { ColorPickerField } from "../../ColorPickerField";

export const FooterBlock: ComponentConfig<
  React.PropsWithChildren<FooterProps>
> = {
  fields: {
    PrimaryColor: {
      type: "custom",
      label: "Primary Color",
      render(props) {
        return (
          <ColorPickerField
            label="Primary Color"
            value={props.value}
            onChange={props.onChange}
          />
        );
      },
    },
    SecondaryColor: {
      type: "custom",
      label: "Secondary Color",
      render(props) {
        return (
          <ColorPickerField
            label="Secondary Color"
            value={props.value}
            onChange={props.onChange}
          />
        );
      },
    },
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
