import { ComponentConfig } from "@puckeditor/core";
import { OpeningHours, OpeningHoursProps } from "./OpeningHours";
import React from "react";
import { ColorPickerField } from "../../ColorPickerField";

export const OpeningHoursBlock: ComponentConfig<
  React.PropsWithChildren<OpeningHoursProps>
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

    DisplaySize: {
      type: "select",
      options: [
        { label: "Table", value: "Table" },
        { label: "List", value: "List" },
      ],
    },

    ShowClosedDays: {
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },

    HeadingText: { type: "text" },

    HeadingSize: {
      type: "select",
      options: [
        { label: "SM", value: "sm" },
        { label: "MD", value: "md" },
        { label: "LG", value: "lg" },
        { label: "XL", value: "xl" },
        { label: "2XL", value: "2xl" },
      ],
    },

    HeadingWeight: {
      type: "select",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6" },
      ],
    },
  },

  defaultProps: {
    PrimaryColor: "#000000",
    SecondaryColor: "#555555",

    GapFromTop: 0,
    GapFromBottom: 0,

    DisplaySize: "Table",
    ShowClosedDays: true,

    HeadingText: "Opening Hours",
    HeadingSize: "lg",
    HeadingWeight: "4",
  },

  render(props) {
    return <OpeningHours {...props} />;
  },
};
