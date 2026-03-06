export interface ReviewProps {
  primaryColor: string;
  secondaryColor: string;

  gapFromTop: number;
  gapFromBottom: number;

  reviewTemplate: "TEMPLATE_ONE" | "TEMPLATE_TWO";

  heading: {
    align: "Left" | "Center" | "Right";
    alignOnMobile: "Left" | "Center";
    level: "1" | "2" | "3" | "4";
    size: "L" | "M" | "S";
    textTransform: "lowercase" | "uppercase";
  };

  arrowButtons: {
    size: "L" | "M" | "S";
    shape: "square" | "rounded";
    backgroundColor: string;
    border: "0" | "1" | "2" | "3" | "4";
    borderColor: string;
  };

  reviewCard: {
    backgroundColor: string;
    textColor: string;

    cardShape: "square" | "rounded";
    cardBorder: "0" | "1" | "2" | "3" | "4";
    cardBorderColor: string;

    nameFontSize: "L" | "M" | "S";
    descriptionFontSize: "XL" | "L" | "M" | "S";

    hoverBgColor: string;
    hoverTextColor: string;

    alignDescription: "Left" | "center";
  };
}

export function Review(props: ReviewProps) {
  const headingSize = {
    L: "text-4xl",
    M: "text-3xl",
    S: "text-2xl",
  };

  const alignMap = {
    Left: "text-left",
    Center: "text-center",
    Right: "text-right",
  };

  const cardShape = {
    square: "rounded-none",
    rounded: "rounded-lg",
  };

  const borderSize = {
    "0": "border-0",
    "1": "border",
    "2": "border-2",
    "3": "border-4",
    "4": "border-8",
  };

  return (
    <section
      style={{
        marginTop: props.gapFromTop,
        marginBottom: props.gapFromBottom,
      }}
      className="w-full px-6"
    >
      {/* HEADING */}
      <div className={alignMap[props.heading.align]}>
        <h2
          className={headingSize[props.heading.size]}
          style={{
            textTransform: props.heading.textTransform,
            color: props.secondaryColor,
          }}
        >
          What Our Customer Say About Us
        </h2>
      </div>

      {/* ARROWS */}
      <div className="flex justify-end gap-3 mt-4">
        <button
          className={`p-2 ${cardShape[props.arrowButtons.shape]} ${borderSize[props.arrowButtons.border]}`}
          style={{
            background: props.arrowButtons.backgroundColor,
            borderColor: props.arrowButtons.borderColor,
          }}
        >
          ←
        </button>

        <button
          className={`p-2 ${cardShape[props.arrowButtons.shape]} ${borderSize[props.arrowButtons.border]}`}
          style={{
            background: props.arrowButtons.backgroundColor,
            borderColor: props.arrowButtons.borderColor,
          }}
        >
          →
        </button>
      </div>

      {/* REVIEW CARDS */}
      <div className="grid grid-cols-3 gap-6 mt-8">
        {[1, 2, 3].map((item, i) => (
          <div
            key={i}
            className={`p-6 ${cardShape[props.reviewCard.cardShape]} ${borderSize[props.reviewCard.cardBorder]}`}
            style={{
              background: props.reviewCard.backgroundColor,
              color: props.reviewCard.textColor,
              borderColor: props.reviewCard.cardBorderColor,
            }}
          >
            <p className="mb-4">
              The service and the food was excellent. Every little detail and
              the place itself was fantastic.
            </p>

            <div className="text-yellow-500 mb-2">★★★★★</div>

            <div className="text-sm font-semibold">John Doe</div>
          </div>
        ))}
      </div>
    </section>
  );
}
