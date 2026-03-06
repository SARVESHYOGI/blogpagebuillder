import { ComponentConfig } from "@puckeditor/core";
import { EventSection, EventSectionProps } from "./EventSection";
import React from "react";

export const EventSectionBlock: ComponentConfig<
  React.PropsWithChildren<EventSectionProps>
> = {
  fields: {
    PrimaryColor: { type: "text" },
    SecondaryColor: { type: "text" },

    GapFromTop: { type: "number" },
    GapFromBottom: { type: "number" },

    Columns: { type: "number" },

    CardShape: {
      type: "select",
      options: [
        { label: "Square", value: "square" },
        { label: "Rounded", value: "rounded" },
        { label: "Pill", value: "pill" },
      ],
    },

    ShowDate: {
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },

    MaxItems: { type: "number" },

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
    PrimaryColor: "#5b4636",
    SecondaryColor: "#333",

    GapFromTop: 0,
    GapFromBottom: 0,

    Columns: 3,
    CardShape: "rounded",

    ShowDate: true,
    MaxItems: 3,

    HeadingText: "Upcoming Events",
    HeadingSize: "xl",
    HeadingWeight: "5",
  },

  render(props) {
    return <EventSection {...props} />;
  },
};
