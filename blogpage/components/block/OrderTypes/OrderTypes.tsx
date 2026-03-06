export interface OrderTypeItem {
  value: "Delivery" | "Pickup" | "Reservation";
}

export interface OrderTypesProps {
  backgroundImage?: string;
  gapFromTop: number;
  gapFromBottom: number;
  orderTypes: OrderTypeItem[];
}

export function OrderType(props: OrderTypesProps) {
  const iconMap = {
    Delivery: "/public/image.png",
    Pickup: "/public/image.png",
    Reservation: "/public/image.png",
  };

  return (
    <section
      style={{
        marginTop: props.gapFromTop,
        marginBottom: props.gapFromBottom,
      }}
      className="relative w-full"
    >
      <div
        className="w-full py-16 bg-cover bg-center flex justify-center"
        style={{ backgroundImage: `url('${props.backgroundImage}')` }}
      >
        <div className="flex items-center gap-16">
          {props.orderTypes.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-white">
              <img src={iconMap[item.value]} className="w-10 h-10 mb-2" />
              <span className="tracking-widest text-sm uppercase">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
