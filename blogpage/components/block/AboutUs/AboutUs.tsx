import { data } from "../../../db";

export interface AboutUsCardProps {
  primaryColor: string;
  secondaryColor: string;

  gapFromTop: number;
  gapFromBottom: number;

  aboutUsTemplate: "TEMPLATE 1" | "TEMPLATE 2";

  heading: {
    size: "L" | "M" | "S";
    level: "1" | "2" | "3" | "4";
    textTransform: "lowercase" | "uppercase";
  };

  descriptionSize: "2XL" | "XL" | "L" | "M" | "S";

  alignImages: "start" | "end";

  alignText: "left" | "center";

  alignTextOnMobile: "left" | "center";

  viewGalleryButton: {
    textColor: string;
    hoverTextColor: string;

    size: "L" | "M" | "S";

    shape: "square" | "rounded";

    borderRadius: "L" | "M" | "S";

    backgroundColor: string;

    border: "0" | "1" | "2" | "3" | "4";

    borderColor: string;
  };
}

export function AboutUsCard(props: AboutUsCardProps) {
  const headingSize = {
    L: "text-4xl",
    M: "text-3xl",
    S: "text-2xl",
  };

  const descriptionSize = {
    "2XL": "text-2xl",
    XL: "text-xl",
    L: "text-lg",
    M: "text-base",
    S: "text-sm",
  };

  const buttonSize = {
    L: "px-8 py-4",
    M: "px-6 py-3",
    S: "px-4 py-2",
  };

  const buttonShape = {
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

  const alignText = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <section
      style={{
        marginTop: props.gapFromTop,
        marginBottom: props.gapFromBottom,
        background: props.primaryColor,
      }}
      className="w-full px-6 py-20"
    >
      {/* ---------------- TEMPLATE 1 ---------------- */}
      {props.aboutUsTemplate === "TEMPLATE 1" && (
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div className={alignText[props.alignText]}>
            <h2
              className={`${headingSize[props.heading?.size]} font-bold mb-6`}
              style={{
                color: props.secondaryColor,
                textTransform: props.heading?.textTransform,
              }}
            >
              About Us
            </h2>

            <p className={`${descriptionSize[props.descriptionSize]} mb-6`}>
              {data.display_description}
            </p>

            <button
              style={{
                background: props.viewGalleryButton?.backgroundColor,
                color: props.viewGalleryButton?.textColor,
                borderColor: props.viewGalleryButton?.borderColor,
              }}
              className={`${buttonSize[props.viewGalleryButton?.size]} 
              ${buttonShape[props.viewGalleryButton?.shape]} 
              ${borderSize[props.viewGalleryButton?.border]} font-semibold`}
            >
              View Gallery
            </button>
          </div>

          {/* IMAGE SIDE */}
          <div className="flex flex-col items-center gap-6">
            <img src={data.shop_images[0].uri} className="w-32 opacity-70" />

            <img
              src={data.shop_images[1].uri}
              className="rounded-lg w-[400px]"
            />
          </div>
        </div>
      )}

      {/* ---------------- TEMPLATE 2 ---------------- */}
      {props.aboutUsTemplate === "TEMPLATE 2" && (
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12 items-center">
          {/* TEXT */}
          <div className={alignText[props.alignText]}>
            <h2
              className={`${headingSize[props.heading?.size]} font-bold mb-6`}
              style={{
                color: props.secondaryColor,
                textTransform: props.heading?.textTransform,
              }}
            >
              About Us
            </h2>

            <p className={`${descriptionSize[props.descriptionSize]} mb-6`}>
              {data.display_description}
            </p>

            <button
              style={{
                background: props.viewGalleryButton?.backgroundColor,
                color: props.viewGalleryButton?.textColor,
                borderColor: props.viewGalleryButton?.borderColor,
              }}
              className={`${buttonSize[props.viewGalleryButton?.size]} 
              ${buttonShape[props.viewGalleryButton?.shape]} 
              ${borderSize[props.viewGalleryButton?.border]} font-semibold`}
            >
              View Gallery
            </button>
          </div>

          {/* CENTER ICON */}
          <div className="flex justify-center">
            <img src={data.shop_images[0].uri} className="w-32 opacity-80" />
          </div>

          {/* IMAGE STACK */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={data.shop_images[2].uri}
              className="rounded-lg object-cover"
            />

            <img
              src={data.shop_images[3].uri}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
