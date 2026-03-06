import { ComponentConfig, DropZone } from "@puckeditor/core";
import { Column, ColumnProps } from "./Column";

export const ColumnBlock: ComponentConfig<
  React.PropsWithChildren<ColumnProps>
> = {
  fields: {
    colsS: { type: "number" },
    colsM: { type: "number" },
    colsL: { type: "number" },
  },
  defaultProps: {
    colsS: 2,
    colsM: 6,
    colsL: 12,
  },
  render(props) {
    return (
      <Column {...props}>
        <DropZone zone="column" />
      </Column>
    );
  },
};
