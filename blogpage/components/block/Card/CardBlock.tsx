import { ComponentConfig, DropZone } from "@puckeditor/core";
import { Card, CardProps } from "./Card";
import React from "react";

export const CardBlock: ComponentConfig<React.PropsWithChildren<CardProps>> = {
  fields: {
    bg: {
      type: "select",
      options: [
        { label: "white", value: "white" },
        { label: "purple", value: "purple" },
        { label: "amber", value: "amber" },
      ],
    },
    inset: { type: "number" },
    rounded: {
      type: "select",
      options: [
        { label: "sm", value: "sm" },
        { label: "md", value: "md" },
        { label: "lg", value: "lg" },
      ],
    },
    description: {
      type: "textarea",
    },
  },
  defaultProps: {
    bg: "white",
    inset: 0,
    rounded: undefined,
  },
  render(props) {
    return (
      <Card {...props}>
        <DropZone zone="card" />
      </Card>
    );
  },
};
