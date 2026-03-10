import { ComponentConfig } from "@puckeditor/core";
import { PaymentLogos, PaymentLogosProps } from "./PaymentLogos";
import { ColorPickerField } from "../../ColorPickerField";

export const PaymentLogosBlock: ComponentConfig<PaymentLogosProps> = {
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

    paymentLogos: {
      label: "Payment",
      type: "array",
      getItemSummary: (item) => item.logo,
      defaultItemProps: {
        logo: "gpay",
      },
      arrayFields: {
        logo: {
          label: "Payment Logo",
          type: "select",
          options: [
            { label: "Apple Pay", value: "applepay" },
            { label: "Google Pay", value: "gpay" },
            { label: "PayPal", value: "paypal" },
            { label: "Visa", value: "visa" },
          ],
        },
      },
    },

    iconSize: {
      type: "radio",
      options: [
        { label: "Large", value: "L" },
        { label: "Medium", value: "M" },
        { label: "Small", value: "S" },
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
  },

  defaultProps: {
    primaryColor: "#F59E0B",
    secondaryColor: "#78350F",

    paymentLogos: [{ logo: "gpay" }, { logo: "visa" }, { logo: "applepay" }],

    iconSize: "M",

    backgroundColor: "transparent",
  },

  render(props) {
    return <PaymentLogos {...props} />;
  },
};
