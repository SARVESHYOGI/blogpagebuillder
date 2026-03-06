import { ComponentConfig, DropZone } from "@puckeditor/core";
import React from "react";
import { Row, RowProps } from "./Row";

export const RowBlock: ComponentConfig<React.PropsWithChildren<RowProps>> = {
  fields: {
    inset: { type: "number" },
  },
  defaultProps: {
    inset: 0,
  },
  render(props) {
    return (
      <Row {...props}>
        <DropZone zone="row" />
      </Row>
    );
  },
};
