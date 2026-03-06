import { cx } from "class-variance-authority";

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
    L: "text-4xl",
    M: "text-3xl",
    S: "text-2xl",
  };

  const buttonSize = {
    L: "px-6 py-3",
    M: "px-4 py-2",
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

  return (
    <section
      style={{
        marginTop: props.gapFromTop,
        marginBottom: props.gapFromBottom,
      }}
      className="w-full"
    >
      {/* TOP SECTION */}
      <div
        style={{ background: props.primaryColor }}
        className="py-10 px-6 text-center"
      >
        <h2
          className={headingSize[props.topSection.headingSize]}
          style={{
            textTransform: props.topSection.headingTextTransform,
          }}
        >
          Creativity is always on our menu
        </h2>

        {/* CATEGORY BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["Salads", "Starters", "Soups", "Thali", "Curries"].map((cat, i) => (
            <button
              key={i}
              style={{
                background: props.topSection.categoryBgColor,
                color: props.topSection.categoryTextColor,
              }}
              className={cx(
                buttonSize[props.topSection.categoryButtonSize],
                buttonShape[props.topSection.categoryButtonShape],
                "border border-black",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div
        style={{ background: props.productSection.bgColor }}
        className="py-12 px-6"
      >
        <div className="max-w-5xl mx-auto">
          {/* CATEGORY IMAGE */}
          {props.backgroundImage === "show" && (
            <img
              src="/menu-banner.jpg"
              className={cx(
                "w-full mb-8",
                props.productSection.categoryImageShape === "rounded"
                  ? "rounded-lg"
                  : "rounded-none",
              )}
            />
          )}

          {/* PRODUCTS */}
          <div
            className={cx(
              "grid grid-cols-2 gap-8",
              alignText[props.productSection.alignProductsText],
            )}
          >
            {[1, 2, 3, 4].map((p, i) => (
              <div key={i} className="border-b pb-4">
                <h3 className="font-semibold text-xl">Salades</h3>
                <p className="text-sm">
                  green peas and potatoes and fresh vegetables
                </p>
              </div>
            ))}
          </div>

          {/* ORDER BUTTON */}
          <div className="flex justify-center mt-10">
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
