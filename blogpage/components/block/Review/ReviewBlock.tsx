import { ComponentConfig } from "@puckeditor/core";
import { Review, ReviewProps } from "./Review";

export const ReviewBlock: ComponentConfig<
  React.PropsWithChildren<ReviewProps>
> = {
  fields: {
    primaryColor: { type: "text" },
    secondaryColor: { type: "text" },

    gapFromTop: { type: "number" },
    gapFromBottom: { type: "number" },

    reviewTemplate: {
      type: "select",
      options: [
        { label: "Template One", value: "TEMPLATE_ONE" },
        { label: "Template Two", value: "TEMPLATE_TWO" },
      ],
    },

    heading: {
      type: "object",
      objectFields: {
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "Left" },
            { label: "Center", value: "Center" },
            { label: "Right", value: "Right" },
          ],
        },

        alignOnMobile: {
          type: "radio",
          options: [
            { label: "Left", value: "Left" },
            { label: "Center", value: "Center" },
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

        size: {
          type: "radio",
          options: [
            { label: "L", value: "L" },
            { label: "M", value: "M" },
            { label: "S", value: "S" },
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

    arrowButtons: {
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

        shape: {
          type: "radio",
          options: [
            { label: "square", value: "square" },
            { label: "rounded", value: "rounded" },
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

    reviewCard: {
      type: "object",
      objectFields: {
        backgroundColor: { type: "text" },
        textColor: { type: "text" },

        cardShape: {
          type: "radio",
          options: [
            { label: "square", value: "square" },
            { label: "rounded", value: "rounded" },
          ],
        },

        cardBorder: {
          type: "select",
          options: [
            { label: "0", value: "0" },
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
          ],
        },

        cardBorderColor: { type: "text" },

        nameFontSize: {
          type: "radio",
          options: [
            { label: "L", value: "L" },
            { label: "M", value: "M" },
            { label: "S", value: "S" },
          ],
        },

        descriptionFontSize: {
          type: "radio",
          options: [
            { label: "XL", value: "XL" },
            { label: "L", value: "L" },
            { label: "M", value: "M" },
            { label: "S", value: "S" },
          ],
        },

        hoverBgColor: { type: "text" },
        hoverTextColor: { type: "text" },

        alignDescription: {
          type: "radio",
          options: [
            { label: "Left", value: "Left" },
            { label: "center", value: "center" },
          ],
        },
      },
    },
  },

  defaultProps: {
    primaryColor: "#5b4636",
    secondaryColor: "#333",

    gapFromTop: 0,
    gapFromBottom: 0,

    reviewTemplate: "TEMPLATE_ONE",

    heading: {
      align: "Center",
      alignOnMobile: "Center",
      level: "2",
      size: "L",
      textTransform: "uppercase",
    },

    arrowButtons: {
      size: "M",
      shape: "rounded",
      backgroundColor: "#ffffff",
      border: "1",
      borderColor: "#e5e5e5",
    },

    reviewCard: {
      backgroundColor: "#ffffff",
      textColor: "#333333",

      cardShape: "rounded",
      cardBorder: "1",
      cardBorderColor: "#e5e5e5",

      nameFontSize: "M",
      descriptionFontSize: "M",

      hoverBgColor: "#f5f5f5",
      hoverTextColor: "#000000",

      alignDescription: "Left",
    },
  },

  render(props) {
    return <Review {...props} />;
  },
};
