import { cx } from "class-variance-authority";
import { data } from "../../../db";

export interface MenuDetailsProps {
  primaryColor: string;
  secondaryColor: string;

  gapFromTop: number;
  gapFromBottom: number;

  backgroundImage: "show" | "hide";

  topSection: {
    gapTopAndBottom: number;
    headingSize: "L" | "M" | "S";
    headingLevel: "1" | "2" | "3" | "4";
    headingTextTransform: "lowercase" | "uppercase";

    categoryBgColor: string;
    categoryTextColor: string;

    categoryButtonSize: "L" | "M" | "S";
    categoryButtonShape: "square" | "rounded";
  };

  productSection: {
    bgColor: string;
    textColor: string;

    categoryImageShape: "square" | "rounded";

    categoryText: "with image" | "after image";
    categoryTextTransform: "lowercase" | "uppercase";

    alignCategoryText: "left" | "center";
    alignProductsText: "left" | "center";

    categoryNameFontSize: "2XL" | "3XL" | "4XL";
    productNameFontSize: "L" | "XL";

    productsBorder: "0" | "1" | "2" | "3" | "4";

    productTextColor: string;
  };

  orderNowButton: {
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

export function MenuDetails(props: MenuDetailsProps) {
  const headingSize = {
    L: "text-5xl",
    M: "text-4xl",
    S: "text-3xl",
  };

  const buttonSize = {
    L: "px-6 py-3",
    M: "px-5 py-2",
    S: "px-3 py-1",
  };

  const buttonShape = {
    rounded: "rounded-full",
    square: "rounded-none",
  };

  const alignText = {
    left: "text-left",
    center: "text-center",
  };

  const categories = [
    "Salads",
    "Starters",
    "Soups",
    "Thali-Platters",
    "Vegetarian Curry Dishes",
    "Vegan Dishes",
    "Curries mit Hähnchenfleisch",
  ];

  const products = [
    {
      name: "Salades",
      desc: "green peas and potatoes and fresh vegetables",
    },
    {
      name: "Salades",
      desc: "mit Hähnchenbrustfilet, Paprika, Zwiebeln, Nüssen und Rosinen",
    },
    {
      name: "Salades",
      desc: "mit Hähnchenbrustfilet, Paprika, Zwiebeln, Nüssen und Rosinen",
    },
    {
      name: "Salades",
      desc: "mit Hähnchenbrustfilet, Paprika, Zwiebeln, Nüssen und Rosinen",
    },
  ];

  return (
    <section
      style={{
        marginTop: props.gapFromTop,
        marginBottom: props.gapFromBottom,
      }}
      className="w-full"
    >
      {/* TOP SECTION */}
      <div style={{ background: props.primaryColor }} className="py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* HEADING */}
          <h2
            className={headingSize[props.topSection.headingSize]}
            style={{ textTransform: props.topSection.headingTextTransform }}
          >
            Creativity is always on our menu
          </h2>

          {/* CATEGORY SLIDER */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* LEFT ARROW */}
            <button className="w-10 h-10 rounded-full border flex items-center justify-center">
              ←
            </button>

            {/* CATEGORY BUTTONS */}
            <div className="flex gap-3 overflow-x-hidden scrollbar-hide">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  style={{
                    background: props.topSection.categoryBgColor,
                    color: props.topSection.categoryTextColor,
                  }}
                  className={cx(
                    buttonSize[props.topSection.categoryButtonSize],
                    buttonShape[props.topSection.categoryButtonShape],
                    "border border-black whitespace-nowrap",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* RIGHT ARROW */}
            <button className="w-10 h-10 rounded-full border flex items-center justify-center">
              →
            </button>
          </div>

          {/* DIVIDER */}
          <div className="w-full h-[1px] bg-black mt-6 opacity-40"></div>
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div
        style={{ background: props.productSection.bgColor }}
        className="py-14 px-6"
      >
        <div className="max-w-6xl mx-auto">
          {/* CATEGORY IMAGE */}
          {props.backgroundImage === "show" && (
            <div className="relative mb-10">
              <img
                src={data.shop_images[2].uri}
                className={cx(
                  "w-full",
                  "h-20",
                  "bg-cover",
                  props.productSection.categoryImageShape === "rounded"
                    ? "rounded-lg"
                    : "rounded-none",
                )}
              />

              {/* TEXT OVER IMAGE */}
              {props.productSection.categoryText === "with image" && (
                <div className="absolute left-6 bottom-6 text-white">
                  <h3 className="text-3xl font-semibold">Salades</h3>
                  <p className="text-sm">
                    * All salads are arranged with dressing of choice.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* PRODUCTS GRID */}
          <div
            className={cx(
              "grid grid-cols-2 gap-x-14 gap-y-8",
              alignText[props.productSection.alignProductsText],
            )}
          >
            {products.map((p, i) => (
              <div key={i} className="border-b pb-3">
                <h3 className="font-semibold text-lg">{p.name}</h3>

                <p className="text-sm opacity-80">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* ORDER BUTTON */}
          <div className="flex justify-center mt-12">
            <button
              style={{
                background: props.orderNowButton.backgroundColor,
                color: props.orderNowButton.textColor,
                borderColor: props.orderNowButton.borderColor,
              }}
              className={cx(
                buttonSize[props.orderNowButton.size],
                buttonShape[props.orderNowButton.shape],
                "border font-semibold",
              )}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
