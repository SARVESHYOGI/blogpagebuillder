import { ComponentConfig } from "@puckeditor/core";
import { Heading, HeadingProps } from "./Heading";

export const HeadingBlock: ComponentConfig<HeadingProps> = {
  fields: {
    text: {
      type: "text",
    },

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
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 },
        { label: "6", value: 6 },
      ],
    },

    align: {
      type: "radio",
      options: [
        { label: "Left", value: "Left" },
        { label: "Center", value: "Center" },
        { label: "Right", value: "Right" },
      ],
    },

    color: {
      type: "text",
    },

    padding: {
      type: "number",
    },
  },

  defaultProps: {
    text: "Heading",
    size: "L",
    level: 2,
    align: "Left",
    color: "black",
    padding: 0,
  },

  render(props) {
    return <Heading {...props} />;
  },
};
