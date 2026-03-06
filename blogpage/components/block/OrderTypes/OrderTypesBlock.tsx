import { ComponentConfig } from "@puckeditor/core";
import { OrderTypesProps, OrderType } from "./OrderTypes";

export const OrderTypesBlock: ComponentConfig<
  React.PropsWithChildren<OrderTypesProps>
> = {
  fields: {
    backgroundImage: { type: "text" },
    gapFromTop: { type: "number" },
    gapFromBottom: { type: "number" },

    orderTypes: {
      type: "array",
      arrayFields: {
        value: {
          type: "select",
          options: [
            { label: "Delivery", value: "Delivery" },
            { label: "Pickup", value: "Pickup" },
            { label: "Reservation", value: "Reservation" },
          ],
        },
      },
    },
  },

  defaultProps: {
    backgroundImage: "/public/order-bg.jpg",
    gapFromTop: 100,
    gapFromBottom: 0,

    orderTypes: [
      { value: "Delivery" },
      { value: "Pickup" },
      { value: "Reservation" },
    ],
  },

  render(props) {
    return <OrderType {...props} />;
  },
};
