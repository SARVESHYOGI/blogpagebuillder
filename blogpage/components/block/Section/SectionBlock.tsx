import { ComponentConfig, DropZone } from "@puckeditor/core";
import { Section, SectionProps } from "./Section";

export const SectionBlock: ComponentConfig<
  React.PropsWithChildren<SectionProps>
> = {
  fields: {
    bg: {
      type: "select",
      options: [
        { label: "blue", value: "blue" },
        { label: "green", value: "green" },
        { label: "gray", value: "gray" },
      ],
    },
    inGrid: {
      type: "radio",
      options: [
        { label: "tak", value: true },
        { label: "nie", value: false },
      ],
    },
  },
  defaultProps: {},
  render(props) {
    return (
      <Section {...props}>
        <DropZone zone="section" />
      </Section>
    );
  },
};
