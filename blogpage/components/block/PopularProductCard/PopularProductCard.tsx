export interface PopularProductCardProps {
  primaryColor: string;
  secondaryColor: string;

  gapFromTop: number;
  gapFromBottom: number;

  heading: {
    align: "left" | "center" | "right";
    alignOnMobile: "left" | "center";
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

  popularDishCard: {
    shape: "square" | "rounded";
    alignText: "left" | "center";

    backgroundColor: string;
    textColor: string;

    cardBorder: "0" | "1" | "2" | "3" | "4";
    cardBorderColor: string;

    hoverBgColor: string;
    hoverTextColor: string;

    titleSize: "2XL" | "XL" | "L" | "M" | "S";
    titleTextTransform: "lowercase" | "uppercase";

    buttonShape: "square" | "rounded";
    buttonSize: "L" | "M" | "S";

    buttonBgColor: string;
    buttonBorder: "0" | "1" | "2" | "3" | "4";
    buttonBorderColor: string;

    image: "default" | "cover";
  };

  exploreMoreButton: {
    backgroundColor: string;
    textColor: string;
    hoverTextColor: string;

    size: "L" | "M" | "S";
    shape: "square" | "rounded";
    borderRadius: "L" | "M" | "S";

    border: "0" | "1" | "2" | "3" | "4";
    borderColor: string;
  };
}

export function PopularProductCard(props: PopularProductCardProps) {
  const headingSize = {
    L: "text-4xl",
    M: "text-3xl",
    S: "text-2xl",
  };

  const cardRadius = {
    rounded: "rounded-lg",
    square: "rounded-none",
  };

  const buttonSize = {
    L: "px-6 py-3",
    M: "px-4 py-2",
    S: "px-3 py-1",
  };

  const titleSize = {
    "2XL": "text-2xl",
    XL: "text-xl",
    L: "text-lg",
    M: "text-base",
    S: "text-sm",
  };

  return (
    <section
      style={{
        marginTop: props.gapFromTop,
        marginBottom: props.gapFromBottom,
        background: props.primaryColor,
      }}
      className="w-full py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          <h2
            className={`${headingSize[props.heading.size]} font-bold`}
            style={{
              textAlign: props.heading.align,
              textTransform: props.heading.textTransform,
              color: props.secondaryColor,
            }}
          >
            Our Most Popular Dishes
          </h2>

          {/* ARROW BUTTONS */}
          <div className="flex gap-3">
            <button className="w-10 h-10 bg-white rounded-full">←</button>
            <button className="w-10 h-10 bg-white rounded-full">→</button>
          </div>
        </div>

        {/* PRODUCT CARDS */}
        <div className="grid grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item, i) => (
            <div
              key={i}
              style={{
                background: props.popularDishCard.backgroundColor,
                color: props.popularDishCard.textColor,
              }}
              className={`p-4 shadow-md ${
                cardRadius[props.popularDishCard.shape]
              }`}
            >
              <img
                src="/food.png"
                className={`w-full mb-4 ${
                  props.popularDishCard.image === "cover"
                    ? "object-cover h-40"
                    : ""
                }`}
              />

              <h3
                className={`font-semibold mb-2 ${
                  titleSize[props.popularDishCard.titleSize]
                }`}
              >
                Chili Chicken (spicy)
              </h3>

              <p className="text-sm mb-3">
                Chicken fillet fried with bell pepper, onions and garlic in
                special red chili sauce
              </p>

              <div className="flex justify-between items-center">
                <span className="font-semibold">12.00</span>

                <button
                  style={{
                    background: props.popularDishCard.buttonBgColor,
                    borderColor: props.popularDishCard.buttonBorderColor,
                  }}
                  className={`${buttonSize[props.popularDishCard.buttonSize]} ${
                    props.popularDishCard.buttonShape === "rounded"
                      ? "rounded-md"
                      : "rounded-none"
                  } text-white`}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* EXPLORE BUTTON */}
        <div className="flex justify-center mt-12">
          <button
            style={{
              background: props.exploreMoreButton.backgroundColor,
              color: props.exploreMoreButton.textColor,
              borderColor: props.exploreMoreButton.borderColor,
            }}
            className={`${buttonSize[props.exploreMoreButton.size]} font-semibold`}
          >
            Explore more
          </button>
        </div>
      </div>
    </section>
  );
}
