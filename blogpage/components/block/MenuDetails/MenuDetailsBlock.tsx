import { ComponentConfig } from "@puckeditor/core";
import { MenuDetails, MenuDetailsProps } from "./MenuDetails";
import React from "react";

export const MenuDetailsBlock: ComponentConfig<
  React.PropsWithChildren<MenuDetailsProps>
> = {
  fields: {
    primaryColor: { type: "text" },
    secondaryColor: { type: "text" },

    gapFromTop: { type: "number" },
    gapFromBottom: { type: "number" },

    backgroundImage: {
      type: "radio",
      options: [
        { label: "show", value: "show" },
        { label: "hide", value: "hide" },
      ],
    },

    topSection: {
      type: "object",
      objectFields: {
        gapTopAndBottom: { type: "number" },

        headingSize: {
          type: "radio",
          options: [
            { label: "L", value: "L" },
            { label: "M", value: "M" },
            { label: "S", value: "S" },
          ],
        },

        headingLevel: {
          type: "select",
          options: [
            { label: "H1", value: "1" },
            { label: "H2", value: "2" },
            { label: "H3", value: "3" },
            { label: "H4", value: "4" },
          ],
        },

        headingTextTransform: {
          type: "radio",
          options: [
            { label: "lowercase", value: "lowercase" },
            { label: "uppercase", value: "uppercase" },
          ],
        },

        categoryBgColor: { type: "text" },

        categoryTextColor: { type: "text" },

        categoryButtonSize: {
          type: "radio",
          options: [
            { label: "L", value: "L" },
            { label: "M", value: "M" },
            { label: "S", value: "S" },
          ],
        },

        categoryButtonShape: {
          type: "radio",
          options: [
            { label: "square", value: "square" },
            { label: "rounded", value: "rounded" },
          ],
        },
      },
    },

    productSection: {
      type: "object",
      objectFields: {
        bgColor: { type: "text" },

        textColor: { type: "text" },

        categoryImageShape: {
          type: "radio",
          options: [
            { label: "square", value: "square" },
            { label: "rounded", value: "rounded" },
          ],
        },

        categoryText: {
          type: "radio",
          options: [
            { label: "with image", value: "with image" },
            { label: "after image", value: "after image" },
          ],
        },

        categoryTextTransform: {
          type: "radio",
          options: [
            { label: "lowercase", value: "lowercase" },
            { label: "uppercase", value: "uppercase" },
          ],
        },

        alignCategoryText: {
          type: "radio",
          options: [
            { label: "left", value: "left" },
            { label: "center", value: "center" },
          ],
        },

        alignProductsText: {
          type: "radio",
          options: [
            { label: "left", value: "left" },
            { label: "center", value: "center" },
          ],
        },

        categoryNameFontSize: {
          type: "select",
          options: [
            { label: "2XL", value: "2XL" },
            { label: "3XL", value: "3XL" },
            { label: "4XL", value: "4XL" },
          ],
        },

        productNameFontSize: {
          type: "select",
          options: [
            { label: "L", value: "L" },
            { label: "XL", value: "XL" },
          ],
        },

        productsBorder: {
          type: "select",
          options: [
            { label: "0", value: "0" },
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
          ],
        },

        productTextColor: { type: "text" },
      },
    },

    orderNowButton: {
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
  defaultProps: {
    primaryColor: "#fde047",
    secondaryColor: "#000000",

    gapFromTop: 80,
    gapFromBottom: 0,

    backgroundImage: "show",

    topSection: {
      gapTopAndBottom: 24,
      headingSize: "L",
      headingLevel: "3",
      headingTextTransform: "lowercase",

      categoryBgColor: "yellow",
      categoryTextColor: "black",
      categoryButtonSize: "M",
      categoryButtonShape: "rounded",
    },

    productSection: {
      bgColor: "white",
      textColor: "black",

      categoryImageShape: "rounded",
      categoryText: "with image",
      categoryTextTransform: "lowercase",

      alignCategoryText: "center",
      alignProductsText: "left",

      categoryNameFontSize: "3XL",
      productNameFontSize: "XL",

      productsBorder: "1",

      productTextColor: "black",
    },

    orderNowButton: {
      backgroundColor: "#5b3a1a",
      textColor: "white",
      hoverTextColor: "black",

      size: "M",
      shape: "rounded",

      borderRadius: "M",
      border: "1",
      borderColor: "transparent",
    },
  },
  render(props) {
    return <MenuDetails {...props} />;
  },
};
