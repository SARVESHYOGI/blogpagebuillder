import { ComponentConfig } from "@puckeditor/core";
import { PaymentLogos, PaymentLogosProps } from "./PaymentLogos";

export const PaymentLogosBlock: ComponentConfig<
  React.PropsWithChildren<PaymentLogosProps>
> = {
  fields: {
    primaryColor: { type: "text" },

    secondaryColor: { type: "text" },

    paymentLogos: {
      type: "array",
      arrayFields: {
        logo: { type: "text" },
      },
    },

    iconSize: {
      type: "radio",
      options: [
        { label: "L", value: "L" },
        { label: "M", value: "M" },
        { label: "S", value: "S" },
      ],
    },

    backgroundColor: { type: "text" },
  },

  defaultProps: {
    primaryColor: "#F59E0B",
    secondaryColor: "#78350F",

    paymentLogos: [
      { logo: "/gpay.png" },
      { logo: "/visa.png" },
      { logo: "/applepay.png" },
    ],

    iconSize: "M",

    backgroundColor: "transparent",
  },

  render(props) {
    return <PaymentLogos {...props} />;
  },
};
