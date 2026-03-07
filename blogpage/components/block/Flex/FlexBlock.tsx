import { ComponentConfig } from "@puckeditor/core";
import { Flex, FlexProps } from "./Flex";

export const FlexBlock: ComponentConfig<FlexProps> = {
  fields: {
    items: {
      label: "items",
      type: "array",

      getItemSummary: (_, i) => `Item ${i + 1}`,

      arrayFields: {
        id: {
          type: "text",
          label: "ID",
        },
      },
    },

    minItemWidth: {
      label: "Minimum Item Width",
      type: "number",
    },
  },

  defaultProps: {
    items: [{ id: "1" }, { id: "2" }],
    minItemWidth: 356,
  },

  render: (props) => <Flex {...props} />,
};
