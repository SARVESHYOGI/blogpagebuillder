import { ComponentConfig } from "@puckeditor/core";
import { Column, ColumnProps } from "./Column";

export const ColumnBlock: ComponentConfig<ColumnProps> = {
  fields: {
    Distribution: {
      label: "distribution",
      type: "radio",
      options: [
        { label: "Auto", value: true },
        { label: "Manual", value: false },
      ],
    },

    columns: {
      label: "columns",
      type: "array",

      getItemSummary: (item, index) =>
        `Column ${index + 1}, span ${item.span ?? "auto"}`,

      arrayFields: {
        span: {
          label: "Span (1-12)",
          type: "number",
          min: 1,
          max: 12,
        },
      },
    },
  },

  defaultProps: {
    Distribution: true,
    columns: [{ span: undefined }, { span: undefined }, { span: undefined }],
  },

  render(props) {
    return <Column {...props} />;
  },
};
