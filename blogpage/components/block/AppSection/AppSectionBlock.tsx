import { ComponentConfig } from "@puckeditor/core";
import { AppSection, AppSectionProps } from "./AppSection";
import React from "react";

export const AppSectionBlock: ComponentConfig<
  React.PropsWithChildren<AppSectionProps>
> = {
  fields: {
    primaryColor: { type: "text" },
    secondaryColor: { type: "text" },

    gapFromTop: { type: "number" },
    gapFromBottom: { type: "number" },

    background: {
      type: "select",
      options: [
        { label: "Template 1", value: "Template1" },
        { label: "Template 2", value: "Template2" },
      ],
    },

    heading: {
      type: "object",
      objectFields: {
        size: {
          type: "radio",
          options: [
            { label: "L", value: "L" },
            { label: "M", value: "M" },
            { label: "S", value: "S" },
          ],
        },

        level: {
          type: "select",
          options: [
            { label: "H1", value: "1" },
            { label: "H2", value: "2" },
            { label: "H3", value: "3" },
            { label: "H4", value: "4" },
          ],
        },

        textTransform: {
          type: "radio",
          options: [
            { label: "lowercase", value: "lowercase" },
            { label: "uppercase", value: "uppercase" },
          ],
        },
      },
    },

    descriptionSize: {
      type: "select",
      options: [
        { label: "S", value: "S" },
        { label: "M", value: "M" },
        { label: "L", value: "L" },
        { label: "XL", value: "XL" },
        { label: "2XL", value: "2XL" },
      ],
    },

    shopNameSize: {
      type: "select",
      options: [
        { label: "S", value: "S" },
        { label: "M", value: "M" },
        { label: "L", value: "L" },
        { label: "XL", value: "XL" },
        { label: "2XL", value: "2XL" },
      ],
    },

    shopDescriptionSize: {
      type: "select",
      options: [
        { label: "S", value: "S" },
        { label: "M", value: "M" },
        { label: "L", value: "L" },
      ],
    },

    alignDownloadAppText: {
      type: "radio",
      options: [
        { label: "left", value: "left" },
        { label: "center", value: "center" },
      ],
    },

    appButtons: {
      type: "radio",
      options: [
        { label: "rounded", value: "rounded" },
        { label: "square", value: "square" },
      ],
    },

    appButtonsSize: {
      type: "radio",
      options: [
        { label: "L", value: "L" },
        { label: "M", value: "M" },
        { label: "S", value: "S" },
      ],
    },

    alignMobileFrame: {
      type: "radio",
      options: [
        { label: "start", value: "start" },
        { label: "end", value: "end" },
      ],
    },

    alignMobileFrameData: {
      type: "radio",
      options: [
        { label: "left", value: "left" },
        { label: "center", value: "center" },
      ],
    },

    orderNowButton: {
      type: "object",
      objectFields: {
        textColor: { type: "text" },

        shape: {
          type: "radio",
          options: [
            { label: "square", value: "square" },
            { label: "rounded", value: "rounded" },
          ],
        },
      },
    },

    reserveNowButton: {
      type: "object",
      objectFields: {
        backgroundColor: { type: "text" },
        textColor: { type: "text" },

        shape: {
          type: "radio",
          options: [
            { label: "square", value: "square" },
            { label: "rounded", value: "rounded" },
          ],
        },
      },
    },
  },

  defaultProps: {
    primaryColor: "#e5d7c3",
    secondaryColor: "#5b3a1a",
    gapFromTop: 80,
    gapFromBottom: 80,

    background: "Template1",

    heading: {
      size: "L",
      level: "2",
      textTransform: "lowercase",
    },

    descriptionSize: "M",
    shopNameSize: "XL",
    shopDescriptionSize: "S",

    alignDownloadAppText: "center",
    appButtons: "rounded",
    appButtonsSize: "M",

    alignMobileFrame: "start",
    alignMobileFrameData: "center",

    orderNowButton: {
      textColor: "black",
      shape: "rounded",
    },

    reserveNowButton: {
      backgroundColor: "transparent",
      textColor: "black",
      shape: "rounded",
    },
  },

  render(props) {
    return <AppSection {...props} />;
  },
};
