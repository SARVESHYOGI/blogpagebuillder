type PaymentLogo = "applepay" | "gpay" | "paypal" | "visa";

export interface PaymentLogosProps {
  primaryColor: string;
  secondaryColor: string;

  paymentLogos: {
    logo: PaymentLogo;
  }[];

  iconSize: "L" | "M" | "S";

  backgroundColor: string;
}

const logoMap: Record<string, string> = {
  applepay: "/assets/apple_pay_logo.svg",
  gpay: "/assets/google_pay_logo.svg",
  paypal: "/assets/paypal_logo.svg",
  visa: "/assets/visa_logo.svg",
};

const findImage = (logo: PaymentLogo): string => {
  return logoMap[logo];
};

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
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap">
        {props.paymentLogos.map((item, i) => (
          <img
            key={i}
            src={findImage(item.logo)}
            className={iconSize[props.iconSize]}
            alt={item.logo}
          />
        ))}
      </div>
    </section>
  );
}
