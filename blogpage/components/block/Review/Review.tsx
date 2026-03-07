export interface ReviewProps {
  primaryColor: string;
  secondaryColor: string;

  gapFromTop: number;
  gapFromBottom: number;

  reviewTemplate: "TEMPLATE_ONE" | "TEMPLATE_TWO" | "TEMPLATE_THREE";

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

const reviews = [
  {
    name: "John Doe",
    date: "27/03/2024",
    rating: 5,
    text: "The service and the food was excellent. Every little detail and the place itself was fantastic.",
    avatar: "/download.png",
  },
  {
    name: "Anna Smith",
    date: "27/03/2024",
    rating: 5,
    text: "Amazing food and great staff. Highly recommended!",
    avatar: "/download.png",
  },
  {
    name: "Robert Fox",
    date: "27/03/2024",
    rating: 2,
    text: "Very nice ambiance and delicious dishes.",
    avatar: "/download.png",
  },
];

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
      <div className={alignMap[props.heading?.align]}>
        <h2
          className={headingSize[props.heading?.size]}
          style={{
            textTransform: props.heading?.textTransform,
            color: props.secondaryColor,
          }}
        >
          What Our Customer Say About Us
        </h2>
      </div>

      {/* ARROWS */}
      <div className="flex justify-end gap-3 mt-4">
        <button
          className={`p-2 ${cardShape[props.arrowButtons?.shape]} ${borderSize[props.arrowButtons?.border]}`}
          style={{
            background: props.arrowButtons?.backgroundColor,
            borderColor: props.arrowButtons?.borderColor,
          }}
        >
          ←
        </button>

        <button
          className={`p-2 ${cardShape[props.arrowButtons?.shape]} ${borderSize[props.arrowButtons?.border]}`}
          style={{
            background: props.arrowButtons?.backgroundColor,
            borderColor: props.arrowButtons?.borderColor,
          }}
        >
          →
        </button>
      </div>

      {/* REVIEW CARDS */}
      <div className="grid grid-cols-3 gap-6 mt-10">
        {reviews.map((review, i) => {
          /* ---------------- TEMPLATE ONE ---------------- */

          if (props.reviewTemplate === "TEMPLATE_ONE") {
            return (
              <div
                key={i}
                className={`p-6 text-center shadow-md ${cardShape[props.reviewCard.cardShape]}`}
                style={{
                  background: props.reviewCard.backgroundColor,
                  color: props.reviewCard.textColor,
                }}
              >
                <div className="flex justify-center mb-3">
                  <img src={review.avatar} className="w-12 h-12 rounded-full" />
                </div>

                <div className="font-semibold">{review.name}</div>

                <div className="text-yellow-500 mb-3">
                  {" "}
                  {"★".repeat(review.rating)}
                </div>

                <p className="text-sm">{review.text}</p>

                <div className="text-xs mt-4 opacity-60">
                  Source: Review source
                </div>
              </div>
            );
          }

          /* ---------------- TEMPLATE TWO ---------------- */

          if (props.reviewTemplate === "TEMPLATE_TWO") {
            return (
              <div
                key={i}
                className={`p-6 shadow-md ${cardShape[props.reviewCard.cardShape]} ${borderSize[props.reviewCard.cardBorder]}`}
                style={{
                  background: props.reviewCard.backgroundColor,
                  color: props.reviewCard.textColor,
                  borderColor: props.reviewCard.cardBorderColor,
                }}
              >
                <div className="text-gray-300 text-4xl mb-2">“</div>

                <p className="mb-4">{review.text}</p>

                <div className="text-yellow-500 mb-3">
                  {" "}
                  {"★".repeat(review.rating)}
                </div>

                <div className="flex items-center gap-3">
                  <img src={review.avatar} className="w-10 h-10 rounded-full" />

                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-xs opacity-70">{review.date}</div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={i}
              className={`p-6 shadow-md ${cardShape[props.reviewCard.cardShape]} ${borderSize[props.reviewCard.cardBorder]}`}
              style={{
                background: props.reviewCard.backgroundColor,
                color: props.reviewCard.textColor,
                borderColor: props.reviewCard.cardBorderColor,
              }}
            >
              <div className="flex justify-between mb-4">
                <div className="text-yellow-500">
                  {" "}
                  {"★".repeat(review.rating)}
                </div>
                <div className="text-gray-300 text-3xl">”</div>
              </div>

              <p className="mb-6">{review.text}</p>

              <div className="flex items-center gap-3 border-t pt-3">
                <img src={review.avatar} className="w-10 h-10 rounded-full" />

                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-xs opacity-70">{review.date}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
