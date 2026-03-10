import { ComponentConfig } from "@puckeditor/core";
import { CateringCTA, CateringCTAProps } from "./CateringCTA";
import React from "react";
import { ColorPickerField } from "../../ColorPickerField";

export const CateringCTABlock: ComponentConfig<
  React.PropsWithChildren<CateringCTAProps>
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
        { label: "Centered", value: "Centered" },
        { label: "Split", value: "Split" },
      ],
    },

    BackgroundStyle: {
      type: "select",
      options: [
        { label: "Solid", value: "Solid" },
        { label: "Gradient", value: "Gradient" },
      ],
    },

    HeadingText: { type: "text" },

    HeadingSize: {
      type: "select",
      options: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
        { label: "XL", value: "xl" },
        { label: "2XL", value: "2xl" },
      ],
    },

    HeadingWeight: {
      type: "select",
      options: [
        { label: "Thin", value: "1" },
        { label: "Light", value: "2" },
        { label: "Normal", value: "3" },
        { label: "Medium", value: "4" },
        { label: "SemiBold", value: "5" },
        { label: "Bold", value: "6" },
      ],
    },

    SubText: { type: "text" },

    CTAButtonText: { type: "text" },
    CTAButtonURL: { type: "text" },

    ButtonShape: {
      type: "select",
      options: [
        { label: "Rounded", value: "rounded" },
        { label: "Pill", value: "pill" },
      ],
    },
  },

  defaultProps: {
    PrimaryColor: "#F5A742",
    SecondaryColor: "#2B1A0F",

    GapFromTop: 40,
    GapFromBottom: 40,

    Layout: "Centered",
    BackgroundStyle: "Solid",

    HeadingText: "Catering for Every Occasion",
    HeadingSize: "xl",
    HeadingWeight: "6",

    SubText:
      "Planning a special event? Our catering team is here to make it unforgettable.",

    CTAButtonText: "Get a Quote",
    CTAButtonURL: "#",

    ButtonShape: "rounded",
  },

  render(props) {
    return <CateringCTA {...props} />;
  },
};
