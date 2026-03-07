import { ComponentConfig } from "@puckeditor/core";
import { HeroComponent, HeroProps } from "./HeroComponent";

export const HeroComponentBlock: ComponentConfig<HeroProps> = {
  fields: {
    PrimaryColor: {
      type: "text",
      label: "Primary Color",
    },

    SecondaryColor: {
      type: "text",
      label: "Secondary Color",
    },

    Align: {
      type: "radio",
      label: "Text Alignment",
      options: [
        { label: "Left", value: false },
        { label: "Center", value: true },
      ],
    },

    AlignMobileView: {
      type: "radio",
      label: "Mobile Alignment",
      options: [
        { label: "Left", value: false },
        { label: "Center", value: true },
      ],
    },

    BgShadowOnDeskTop: {
      type: "radio",
      label: "Background Shadow",
      options: [
        { label: "Off", value: false },
        { label: "On", value: true },
      ],
    },

    Logo: {
      type: "object",
      label: "Logo Settings",
      objectFields: {
        onDeskTopView: {
          type: "radio",
          label: "Show Logo",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },

        size: {
          type: "select",
          label: "Logo Size",
          options: [
            { label: "Large", value: "L" },
            { label: "Medium", value: "M" },
            { label: "Small", value: "S" },
          ],
        },

        desktopViewLeftSideLogo: {
          type: "radio",
          label: "Logo Position",
          options: [
            { label: "Left", value: true },
            { label: "Center", value: false },
          ],
        },
      },
    },

    Title: {
      type: "object",
      label: "Title",
      objectFields: {
        fontSize: {
          type: "select",
          options: [
            { label: "Large", value: "L" },
            { label: "Medium", value: "M" },
            { label: "Small", value: "S" },
          ],
        },

        level: {
          type: "select",
          options: [
            { label: "H1", value: 1 },
            { label: "H2", value: 2 },
            { label: "H3", value: 3 },
            { label: "H4", value: 4 },
          ],
        },

        textTransform: {
          type: "radio",
          options: [
            { label: "Normal", value: false },
            { label: "Uppercase", value: true },
          ],
        },
      },
    },

    SubTitle: {
      type: "object",
      label: "Subtitle",
      objectFields: {
        fontSize: {
          type: "select",
          options: [
            { label: "Large", value: "L" },
            { label: "Medium", value: "M" },
            { label: "Small", value: "S" },
          ],
        },

        level: {
          type: "select",
          options: [
            { label: "H2", value: 2 },
            { label: "H3", value: 3 },
            { label: "H4", value: 4 },
          ],
        },

        textTransform: {
          type: "radio",
          options: [
            { label: "Normal", value: false },
            { label: "Uppercase", value: true },
          ],
        },
      },
    },

    AppButtons: {
      type: "object",
      label: "App Buttons",
      objectFields: {
        Align: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },

        Shape: {
          type: "radio",
          options: [
            { label: "Rounded", value: true },
            { label: "Square", value: false },
          ],
        },
      },
    },
    OrderNow: {
      type: "object",
      objectFields: {
        hoverTextColor: { type: "text", label: "Hover Text Color" },

        size: {
          type: "select",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },

        shape: {
          type: "select",
          options: [
            { label: "Square", value: "square" },
            { label: "Rounded", value: "rounded" },
          ],
        },

        border: {
          type: "select",
          options: [
            { label: "1px", value: "1" },
            { label: "2px", value: "2" },
            { label: "3px", value: "3" },
          ],
        },

        borderColor: { type: "text", label: "Border Color" },

        rounded: {
          type: "select",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },

        textTransform: {
          type: "radio",
          options: [
            { label: "Normal", value: false },
            { label: "Uppercase", value: true },
          ],
        },
      },
    },

    ReserveNow: {
      type: "object",
      objectFields: {
        hoverTextColor: { type: "text", label: "Hover Text Color" },

        size: {
          type: "select",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },

        shape: {
          type: "select",
          options: [
            { label: "Square", value: "square" },
            { label: "Rounded", value: "rounded" },
          ],
        },

        border: {
          type: "select",
          options: [
            { label: "1px", value: "1" },
            { label: "2px", value: "2" },
            { label: "3px", value: "3" },
          ],
        },

        borderColor: { type: "text", label: "Border Color" },

        rounded: {
          type: "select",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },

        textTransform: {
          type: "radio",
          options: [
            { label: "Normal", value: false },
            { label: "Uppercase", value: true },
          ],
        },
      },
    },
  },

  defaultProps: {
    PrimaryColor: "#F5C96B",
    SecondaryColor: "#ffffff",

    Align: false,
    AlignMobileView: true,

    BgShadowOnDeskTop: true,

    Logo: {
      onDeskTopView: true,
      size: "S",
      desktopViewLeftSideLogo: true,
    },

    Title: {
      fontSize: "L",
      level: 1,
      textTransform: false,
    },

    SubTitle: {
      fontSize: "M",
      level: 3,
      textTransform: false,
    },

    AppButtons: {
      Align: "left",
      Shape: true,
    },

    OrderNow: {
      hoverTextColor: "#000",
      size: "md",
      shape: "rounded",
      border: "1",
      borderColor: "#F5C96B",
      rounded: "lg",
      textTransform: false,
    },

    ReserveNow: {
      hoverTextColor: "#000",
      size: "md",
      shape: "rounded",
      border: "1",
      borderColor: "#fff",
      rounded: "lg",
      textTransform: false,
    },
  },

  render: (props) => {
    return <HeroComponent {...props} />;
  },
};
