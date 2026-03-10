import { ComponentConfig } from "@puckeditor/core";
import {
  PopularProductCardProps,
  PopularProductCard,
} from "./PopularProductCard";
import { ColorPickerField } from "../../ColorPickerField";

export const PopularProductCardBlock: ComponentConfig<
  React.PropsWithChildren<PopularProductCardProps>
> = {
  fields: {
    primaryColor: {
      type: "custom",
      label: "Primary Color",
      render(props) {
        return (
          <ColorPickerField
            label="Primary Color"
            value={props.value}
            onChange={props.onChange}
          />
        );
      },
    },
    secondaryColor: {
      type: "custom",
      label: "Secondary Color",
      render(props) {
        return (
          <ColorPickerField
            label="Secondary Color"
            value={props.value}
            onChange={props.onChange}
          />
        );
      },
    },

    gapFromTop: { type: "number" },
    gapFromBottom: { type: "number" },

    heading: {
      type: "object",
      objectFields: {
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },

        level: {
          type: "select",
          options: [
            { label: "H1", value: "1" },
            { label: "H2", value: "2" },
            { label: "H3", value: "3" },
            { label: "H4", value: "4" },
          ],
        },

        alignOnMobile: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
          ],
        },

        size: {
          type: "radio",
          options: [
            { label: "L", value: "L" },
            { label: "M", value: "M" },
            { label: "S", value: "S" },
          ],
        },

        textTransform: {
          type: "radio",
          options: [
            { label: "lowercase", value: "lowercase" },
            { label: "uppercase", value: "uppercase" },
          ],
        },
      },
    },

    arrowButtons: {
      type: "object",
      objectFields: {
        size: {
          type: "radio",
          options: [
            { label: "L", value: "L" },
            { label: "M", value: "M" },
            { label: "S", value: "S" },
          ],
        },

        shape: {
          type: "radio",
          options: [
            { label: "square", value: "square" },
            { label: "rounded", value: "rounded" },
          ],
        },

        backgroundColor: {
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

        border: {
          type: "select",
          options: [
            { label: "0", value: "0" },
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
          ],
        },

        borderColor: {
          type: "custom",
          label: "Border Color",
          render(props) {
            return (
              <ColorPickerField
                label="Border Color"
                value={props.value}
                onChange={props.onChange}
              />
            );
          },
        },
      },
    },

    popularDishCard: {
      type: "object",
      objectFields: {
        shape: {
          type: "radio",
          options: [
            { label: "square", value: "square" },
            { label: "rounded", value: "rounded" },
          ],
        },

        alignText: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
          ],
        },

        backgroundColor: {
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

        textColor: {
          type: "custom",
          label: "Text Color",
          render(props) {
            return (
              <ColorPickerField
                label="Text Color"
                value={props.value}
                onChange={props.onChange}
              />
            );
          },
        },

        cardBorder: {
          type: "select",
          options: [
            { label: "0", value: "0" },
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
          ],
        },

        cardBorderColor: {
          type: "custom",
          label: "Card Border Color",
          render(props) {
            return (
              <ColorPickerField
                label="Card Border Color"
                value={props.value}
                onChange={props.onChange}
              />
            );
          },
        },

        hoverBgColor: {
          type: "custom",
          label: "Hover Background Color",
          render(props) {
            return (
              <ColorPickerField
                label="Hover Background Color"
                value={props.value}
                onChange={props.onChange}
              />
            );
          },
        },

        hoverTextColor: {
          type: "custom",
          label: "Hover Text Color",
          render(props) {
            return (
              <ColorPickerField
                label="Hover Text Color"
                value={props.value}
                onChange={props.onChange}
              />
            );
          },
        },

        titleSize: {
          type: "select",
          options: [
            { label: "2XL", value: "2XL" },
            { label: "XL", value: "XL" },
            { label: "L", value: "L" },
            { label: "M", value: "M" },
            { label: "S", value: "S" },
          ],
        },

        titleTextTransform: {
          type: "radio",
          options: [
            { label: "lowercase", value: "lowercase" },
            { label: "uppercase", value: "uppercase" },
          ],
        },

        buttonShape: {
          type: "radio",
          options: [
            { label: "square", value: "square" },
            { label: "rounded", value: "rounded" },
          ],
        },

        buttonSize: {
          type: "radio",
          options: [
            { label: "L", value: "L" },
            { label: "M", value: "M" },
            { label: "S", value: "S" },
          ],
        },

        buttonBgColor: {
          type: "custom",
          label: "Button Background Color",
          render(props) {
            return (
              <ColorPickerField
                label="Button Background Color"
                value={props.value}
                onChange={props.onChange}
              />
            );
          },
        },

        buttonBorder: {
          type: "select",
          options: [
            { label: "0", value: "0" },
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
          ],
        },

        buttonBorderColor: {
          type: "custom",
          label: "Button Border Color",
          render(props) {
            return (
              <ColorPickerField
                label="Button Border Color"
                value={props.value}
                onChange={props.onChange}
              />
            );
          },
        },

        image: {
          type: "radio",
          options: [
            { label: "default", value: "default" },
            { label: "cover", value: "cover" },
          ],
        },
      },
    },

    exploreMoreButton: {
      type: "object",
      objectFields: {
        backgroundColor: {
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

        textColor: {
          type: "custom",
          label: "Text Color",
          render(props) {
            return (
              <ColorPickerField
                label="Text Color"
                value={props.value}
                onChange={props.onChange}
              />
            );
          },
        },

        hoverTextColor: {
          type: "custom",
          label: "Hover Text Color",
          render(props) {
            return (
              <ColorPickerField
                label="Hover Text Color"
                value={props.value}
                onChange={props.onChange}
              />
            );
          },
        },

        size: {
          type: "radio",
          options: [
            { label: "L", value: "L" },
            { label: "M", value: "M" },
            { label: "S", value: "S" },
          ],
        },

        shape: {
          type: "radio",
          options: [
            { label: "square", value: "square" },
            { label: "rounded", value: "rounded" },
          ],
        },

        borderRadius: {
          type: "radio",
          options: [
            { label: "L", value: "L" },
            { label: "M", value: "M" },
            { label: "S", value: "S" },
          ],
        },

        border: {
          type: "select",
          options: [
            { label: "0", value: "0" },
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
          ],
        },

        borderColor: {
          type: "custom",
          label: "Border Color",
          render(props) {
            return (
              <ColorPickerField
                label="Border Color"
                value={props.value}
                onChange={props.onChange}
              />
            );
          },
        },
      },
    },
  },

  render(props) {
    return <PopularProductCard {...props} />;
  },
};
