import { ComponentConfig, DropZone } from "@puckeditor/core";
import { NavigationBar, NavigationBarProps } from "./NavigationBar";

export const NavigationBarBlock: ComponentConfig<
  React.PropsWithChildren<NavigationBarProps>
> = {
  fields: {
    BackgroundColor: { type: "text" },
    TextIconColor: { type: "text" },
    GapFromTop: { type: "number" },
    GapFromBottom: { type: "number" },
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
    Logo: { type: "text" },
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
    Logo: "/logo.png",
  },
  render(props) {
    return (
      <NavigationBar {...props}>
        <DropZone zone="navigation-bar" />
      </NavigationBar>
    );
  },
};
