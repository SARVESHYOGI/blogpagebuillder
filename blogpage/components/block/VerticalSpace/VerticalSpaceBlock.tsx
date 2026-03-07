import { ComponentConfig } from "@puckeditor/core";
import { VerticalSpace, VerticalSpaceProps } from "./VerticalSpace";

export const VerticalSpaceBlock: ComponentConfig<VerticalSpaceProps> = {
  fields: {
    size: {
      label: "size",
      type: "select",
      options: [
        { label: "8px", value: "8px" },
        { label: "16px", value: "16px" },
        { label: "24px", value: "24px" },
        { label: "32px", value: "32px" },
        { label: "48px", value: "48px" },
        { label: "64px", value: "64px" },
      ],
    },
  },

  defaultProps: {
    size: "24px",
  },

  render: (props) => <VerticalSpace {...props} />,
};
