import { ComponentConfig } from "@puckeditor/core";
import { Text, TextProps } from "./Text";

export const TextBlock: ComponentConfig<TextProps> = {
  fields: {
    text: {
      label: "text",
      type: "textarea",
    },

    size: {
      label: "size",
      type: "select",
      options: [
        { label: "S", value: "S" },
        { label: "M", value: "M" },
        { label: "L", value: "L" },
      ],
    },

    level: {
      label: "level",
      type: "select",
      options: [
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 },
        { label: "6", value: 6 },
      ],
    },

    align: {
      label: "align",
      type: "radio",
      options: [
        { label: "Left", value: "Left" },
        { label: "Center", value: "Center" },
        { label: "Right", value: "Right" },
      ],
    },

    color: {
      label: "color",
      type: "text",
    },

    padding: {
      label: "padding",
      type: "text",
    },
  },

  defaultProps: {
    text: "Text",
    size: "M",
    level: 2,
    align: "Left",
    color: "black",
    padding: "24px",
  },

  render: (props) => <Text {...props} />,
};
