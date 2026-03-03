type PaymentLogoProps = {
  logos: { logo: string }[];
};

export const PaymentLogo: React.FC<PaymentLogoProps> = ({ logos }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "auto",
      }}
    >
      {logos.map((item, i) => (
        <img key={i} src={item.logo} width={60} alt={`logo-${i}`} />
      ))}
    </div>
  );
};
