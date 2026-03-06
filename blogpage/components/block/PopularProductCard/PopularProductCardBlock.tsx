import { ComponentConfig } from "@puckeditor/core";
import {
  PopularProductCardProps,
  PopularProductCard,
} from "./PopularProductCard";

export const PopularProductCardBlock: ComponentConfig<
  React.PropsWithChildren<PopularProductCardProps>
> = {
  fields: {
    primaryColor: { type: "text" },
    secondaryColor: { type: "text" },

    gapFromTop: { type: "number" },
    gapFromBottom: { type: "number" },

    heading: {
      type: "object",
      objectFields: {
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
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

        alignOnMobile: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
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

    popularDishCard: {
      type: "object",
      objectFields: {
        shape: {
          type: "radio",
          options: [
            { label: "square", value: "square" },
            { label: "rounded", value: "rounded" },
          ],
        },

        alignText: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
          ],
        },

        backgroundColor: { type: "text" },

        textColor: { type: "text" },

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

        hoverBgColor: { type: "text" },

        hoverTextColor: { type: "text" },

        titleSize: {
          type: "select",
          options: [
            { label: "2XL", value: "2XL" },
            { label: "XL", value: "XL" },
            { label: "L", value: "L" },
            { label: "M", value: "M" },
            { label: "S", value: "S" },
          ],
        },

        titleTextTransform: {
          type: "radio",
          options: [
            { label: "lowercase", value: "lowercase" },
            { label: "uppercase", value: "uppercase" },
          ],
        },

        buttonShape: {
          type: "radio",
          options: [
            { label: "square", value: "square" },
            { label: "rounded", value: "rounded" },
          ],
        },

        buttonSize: {
          type: "radio",
          options: [
            { label: "L", value: "L" },
            { label: "M", value: "M" },
            { label: "S", value: "S" },
          ],
        },

        buttonBgColor: { type: "text" },

        buttonBorder: {
          type: "select",
          options: [
            { label: "0", value: "0" },
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
          ],
        },

        buttonBorderColor: { type: "text" },

        image: {
          type: "radio",
          options: [
            { label: "default", value: "default" },
            { label: "cover", value: "cover" },
          ],
        },
      },
    },

    exploreMoreButton: {
      type: "object",
      objectFields: {
        backgroundColor: { type: "text" },

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
            { label: "square", value: "square" },
            { label: "rounded", value: "rounded" },
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

  render(props) {
    return <PopularProductCard {...props} />;
  },
};
