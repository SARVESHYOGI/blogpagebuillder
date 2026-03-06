export interface PaymentLogosProps {
  primaryColor: string;
  secondaryColor: string;

  paymentLogos: {
    logo: string;
  }[];

  iconSize: "L" | "M" | "S";

  backgroundColor: string;
}

export function PaymentLogos(props: PaymentLogosProps) {
  const iconSize = {
    L: "h-14",
    M: "h-10",
    S: "h-7",
  };

  return (
    <section
      style={{
        background: props.backgroundColor,
      }}
      className="w-full py-6"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-12 flex-wrap">
        {props.paymentLogos.map((item, i) => (
          <img
            key={i}
            src={item.logo}
            className={iconSize[props.iconSize]}
            alt="payment logo"
          />
        ))}
      </div>
    </section>
  );
}
