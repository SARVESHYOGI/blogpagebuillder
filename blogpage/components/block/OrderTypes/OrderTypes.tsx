import { data } from "../../../db";

export interface OrderTypeItem {
  value: "Delivery" | "Pickup" | "Reservation";
}

export interface OrderTypesProps {
  gapFromTop: number;
  gapFromBottom: number;
  orderTypes: OrderTypeItem[];
}

export function OrderType(props: OrderTypesProps) {
  const iconMap = {
    Delivery: data.shop_images[3].uri,
    Pickup: data.shop_images[4].uri,
    Reservation: data.shop_images[5].uri,
  };

  return (
    <section
      style={{
        marginTop: props.gapFromTop,
        marginBottom: props.gapFromBottom,
      }}
      className="relative w-full"
    >
      {/* BACKGROUND */}
      <div
        className="relative w-full py-24 bg-cover bg-center"
        style={{ backgroundImage: `url('${data.shop_images[1].uri}')` }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative max-w-6xl mx-auto flex justify-center items-center">
          {props.orderTypes.map((item, i) => (
            <div key={i} className="flex items-center">
              {/* ITEM */}
              <div className="flex flex-col items-center text-white px-12">
                <img src={iconMap[item.value]} className="w-14 h-14 mb-4" />

                <span className="tracking-widest text-sm uppercase font-semibold">
                  {item.value}
                </span>
              </div>

              {/* DIVIDER */}
              {i !== props.orderTypes.length - 1 && (
                <div className="h-20 w-[1px] bg-white/40"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
