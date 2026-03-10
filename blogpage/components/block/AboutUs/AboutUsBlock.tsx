import { ComponentConfig } from "@puckeditor/core";
import { AboutUsCard, AboutUsCardProps } from "./AboutUs";
import { ColorPickerField } from "../../ColorPickerField";

export const AboutUsCardBlock: ComponentConfig<AboutUsCardProps> = {
  fields: {
    primaryColor: {
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
    secondaryColor: { type: "text" },

    gapFromTop: { type: "number" },
    gapFromBottom: { type: "number" },

    aboutUsTemplate: {
      type: "select",
      options: [
        { label: "Template 1", value: "TEMPLATE 1" },
        { label: "Template 2", value: "TEMPLATE 2" },
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
        { label: "2XL", value: "2XL" },
        { label: "XL", value: "XL" },
        { label: "L", value: "L" },
        { label: "M", value: "M" },
        { label: "S", value: "S" },
      ],
    },

    alignImages: {
      type: "radio",
      options: [
        { label: "Start", value: "start" },
        { label: "End", value: "end" },
      ],
    },
    alignText: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
      ],
    },
    alignTextOnMobile: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
      ],
    },

    viewGalleryButton: {
      type: "object",
      objectFields: {
        textColor: { type: "text" },
        hoverTextColor: { type: "text" },
        size: {
          type: "radio",
          options: [
            { label: "L", value: "L" },
            { label: "M", value: "M" },
            { label: "S", value: "S" },
          ],
        },
        shape: {
          type: "radio",
          options: [
            { label: "Square", value: "square" },
            { label: "Rounded", value: "rounded" },
          ],
        },
        borderRadius: {
          type: "radio",
          options: [
            { label: "L", value: "L" },
            { label: "M", value: "M" },
            { label: "S", value: "S" },
          ],
        },
        backgroundColor: { type: "text" },
        border: {
          type: "select",
          options: [
            { label: "0", value: "0" },
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
          ],
        },
        borderColor: { type: "text" },
      },
    },
  },

  defaultProps: {
    primaryColor: "#5b4636",
    secondaryColor: "#333333",

    gapFromTop: 0,
    gapFromBottom: 0,

    aboutUsTemplate: "TEMPLATE 1",

    heading: {
      size: "L",
      level: "2",
      textTransform: "uppercase",
    },

    descriptionSize: "M",

    alignImages: "start",
    alignText: "left",
    alignTextOnMobile: "center",

    viewGalleryButton: {
      textColor: "#ffffff",
      hoverTextColor: "#ffffff",
      size: "M",
      shape: "rounded",
      borderRadius: "M",
      backgroundColor: "#5b4636",
      border: "1",
      borderColor: "#5b4636",
    },
  },

  render(props) {
    return <AboutUsCard {...props} />;
  },
};
