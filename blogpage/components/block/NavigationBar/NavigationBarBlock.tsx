import { ComponentConfig, DropZone } from "@puckeditor/core";
import { NavigationBar, NavigationBarProps } from "./NavigationBar";
import { ColorPickerField } from "../../ColorPickerField";

export const NavigationBarBlock: ComponentConfig<
  React.PropsWithChildren<NavigationBarProps>
> = {
  fields: {
    BackgroundColor: {
      type: "custom",
      label: "Background Color",
      render(props) {
        return (
          <ColorPickerField
            label="Background Color"
            value={props.value}
            onChange={props.onChange}
          />
        );
      },
    },
    TextIconColor: {
      type: "custom",
      label: "Text/Icon Color",
      render(props) {
        return (
          <ColorPickerField
            label="Text/Icon Color"
            value={props.value}
            onChange={props.onChange}
          />
        );
      },
    },
    GapFromTop: { type: "number", label: "Gap from Top" },
    GapFromBottom: { type: "number", label: "Gap from Bottom" },
    BackgroundStyle: {
      type: "select",
      options: [
        { label: "solid", value: "solid" },
        { label: "blur", value: "blur" },
        { label: "transparent", value: "transparent" },
      ],
    },
    Sticky: {
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    ShowLogo: {
      type: "radio",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    LogoSize: {
      type: "select",
      options: [
        { label: "sm", value: "sm" },
        { label: "md", value: "md" },
        { label: "lg", value: "lg" },
      ],
    },
  },
  defaultProps: {
    BackgroundColor: "white",
    TextIconColor: "black",
    GapFromTop: 0,
    GapFromBottom: 0,
    BackgroundStyle: "solid",
    Sticky: false,
    ShowLogo: true,
    LogoSize: "md",
  },
  render(props) {
    return (
      <NavigationBar {...props}>
        <DropZone zone="navigation-bar" />
      </NavigationBar>
    );
  },
};
