import { useState } from "react";
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

const dishes = [
  {
    name: "Chili Chicken (spicy)",
    description:
      "Chicken fillet fried with bell pepper, onions and garlic in special red chili sauce",
    price: 12,
    image: "/food.png",
  },
  {
    name: "Chili Chicken (spicy)",
    description:
      "Chicken fillet fried with bell pepper, onions and garlic in special red chili sauce",
    price: 12,
    image: "/food.png",
  },
  {
    name: "Chili Chicken (spicy)",
    description:
      "Chicken fillet fried with bell pepper, onions and garlic in special red chili sauce",
    price: 12,
    image: "/food.png",
  },
  {
    name: "Chili Chicken (spicy)",
    description:
      "Chicken fillet fried with bell pepper, onions and garlic in special red chili sauce",
    price: 12,
    image: "/food.png",
  },
  {
    name: "Chili Chicken (spicy)",
    description:
      "Chicken fillet fried with bell pepper, onions and garlic in special red chili sauce",
    price: 12,
    image: "/food.png",
  },
  {
    name: "Chili Chicken (spicy)",
    description:
      "Chicken fillet fried with bell pepper, onions and garlic in special red chili sauce",
    price: 12,
    image: "/food.png",
  },
  {
    name: "Chili Chicken (spicy)",
    description:
      "Chicken fillet fried with bell pepper, onions and garlic in special red chili sauce",
    price: 12,
    image: "/food.png",
  },
];

export function PopularProductCard(props: PopularProductCardProps) {
  const [startIndex, setStartIndex] = useState(0);

  const itemsPerView = 4;

  const nextSlide = () => {
    console.log("btn right");
    if (startIndex + itemsPerView < dishes.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    console.log("btn left");
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const visibleDishes = dishes.slice(startIndex, startIndex + itemsPerView);
  const headingSize = {
    L: "text-4xl",
    M: "text-3xl",
    S: "text-2xl",
  };

  const headingAlign = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const mobileAlign = {
    left: "text-left",
    center: "text-center",
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

  const arrowSize = {
    L: "w-12 h-12",
    M: "w-10 h-10",
    S: "w-8 h-8",
  };

  const arrowShape = {
    rounded: "rounded-full",
    square: "rounded-none",
  };

  const titleSize = {
    "2XL": "text-2xl",
    XL: "text-xl",
    L: "text-lg",
    M: "text-base",
    S: "text-sm",
  };

  const HeadingTag =
    (`h${props.heading?.level}` as keyof React.JSX.IntrinsicElements) || "h2";

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
        <div className="relative mb-12">
          <HeadingTag
            className={`
      ${headingSize[props.heading?.size]}
      ${mobileAlign[props.heading?.alignOnMobile]}
      md:${headingAlign[props.heading?.align]}
      font-bold
    `}
            style={{
              textTransform: props.heading?.textTransform,
              color: props.secondaryColor,
            }}
          >
            Our Most Popular Dishes
          </HeadingTag>

          {/* ARROW BUTTONS */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-3">
            <button
              onClick={prevSlide}
              style={{
                background: props.arrowButtons?.backgroundColor,
                borderColor: props.arrowButtons?.borderColor,
                borderWidth: `${props.arrowButtons?.border}px`,
              }}
              className={`
        ${arrowSize[props.arrowButtons?.size]}
        ${arrowShape[props.arrowButtons?.shape]}
        flex items-center justify-center
      `}
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              style={{
                background: props.arrowButtons?.backgroundColor,
                borderColor: props.arrowButtons?.borderColor,
                borderWidth: `${props.arrowButtons?.border}px`,
              }}
              className={`
        ${arrowSize[props.arrowButtons?.size]}
        ${arrowShape[props.arrowButtons?.shape]}
        flex items-center justify-center
      `}
            >
              →
            </button>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="overflow-hidden">
          <div className="flex gap-6 transition-transform duration-300">
            {visibleDishes.map((dish, i) => (
              <div
                key={i}
                style={{
                  background: props.popularDishCard?.backgroundColor,
                  color: props.popularDishCard?.textColor,
                  borderColor: props.popularDishCard?.cardBorderColor,
                  borderWidth: `${props.popularDishCard?.cardBorder}px`,
                }}
                className={`
                p-4 shadow-md
                ${cardRadius[props.popularDishCard?.shape]}
              `}
              >
                <img
                  src={dish.image}
                  className={`w-full mb-4 ${
                    props.popularDishCard?.image === "cover"
                      ? "object-cover h-40"
                      : ""
                  }`}
                />

                <h3
                  className={`
                  font-semibold mb-2
                  ${titleSize[props.popularDishCard?.titleSize]}
                `}
                  style={{
                    textTransform: props.popularDishCard?.titleTextTransform,
                  }}
                >
                  {dish.name}
                </h3>

                <p className="text-sm mb-3">{dish.description}</p>

                <div className="flex justify-between items-center">
                  <span className="font-semibold">
                    ${dish.price.toFixed(2)}
                  </span>

                  <button
                    style={{
                      background: props.popularDishCard?.buttonBgColor,
                      borderColor: props.popularDishCard?.buttonBorderColor,
                      borderWidth: `${props.popularDishCard?.buttonBorder}px`,
                    }}
                    className={`
                    ${buttonSize[props.popularDishCard?.buttonSize]}
                    ${
                      props.popularDishCard?.buttonShape === "rounded"
                        ? "rounded-md"
                        : "rounded-none"
                    }
                    text-white
                  `}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* EXPLORE BUTTON */}
        <div className="flex justify-center mt-12">
          <button
            style={{
              background: props.exploreMoreButton?.backgroundColor,
              color: props.exploreMoreButton?.textColor,
              borderColor: props.exploreMoreButton?.borderColor,
              borderWidth: `${props.exploreMoreButton?.border}px`,
            }}
            className={`
              ${buttonSize[props.exploreMoreButton?.size]}
              ${
                props.exploreMoreButton?.shape === "rounded"
                  ? "rounded-md"
                  : "rounded-none"
              }
              font-semibold
            `}
          >
            Explore more
          </button>
        </div>
      </div>
    </section>
  );
}
