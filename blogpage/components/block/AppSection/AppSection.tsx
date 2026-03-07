import { cx } from "class-variance-authority";
import { data } from "../../../db";

export interface AppSectionProps {
  primaryColor: string;
  secondaryColor: string;
  gapFromTop: number;
  gapFromBottom: number;

  background: "Template1" | "Template2" | "Template3";

  heading: {
    size: "L" | "M" | "S";
    level: "1" | "2" | "3" | "4" | "5" | "6";
    textTransform: "lowercase" | "uppercase";
  };

  descriptionSize: "S" | "M" | "L" | "XL" | "2XL";
  shopNameSize: "S" | "M" | "L" | "XL" | "2XL";
  shopDescriptionSize: "S" | "M" | "L";

  alignDownloadAppText: "left" | "center";

  appButtons: "rounded" | "square";
  appButtonsSize: "S" | "M" | "L";

  alignMobileFrame: "start" | "end";
  alignMobileFrameData: "left" | "center";

  orderNowButton: {
    textColor: string;
    shape: "square" | "rounded";
  };

  reserveNowButton: {
    backgroundColor: string;
    textColor: string;
    shape: "square" | "rounded";
  };
}

export function AppSection(props: AppSectionProps) {
  const headingSize = {
    L: "text-5xl",
    M: "text-4xl",
    S: "text-3xl",
  };

  const descriptionSize = {
    S: "text-sm",
    M: "text-base",
    L: "text-lg",
    XL: "text-xl",
    "2XL": "text-2xl",
  };

  const buttonSize = {
    S: "h-8",
    M: "h-10",
    L: "h-12",
  };

  const buttonShape = {
    rounded: "rounded-md",
    square: "rounded-none",
  };

  const alignText = {
    left: "text-left items-start",
    center: "text-center items-center",
  };

  const mobileFrameAlign = {
    start: "justify-start",
    end: "justify-end",
  };

  return (
    <section
      style={{
        marginTop: props.gapFromTop,
        marginBottom: props.gapFromBottom,
      }}
      className="relative w-full py-24 px-6 overflow-hidden"
    >
      {/* TEMPLATE BACKGROUNDS */}

      {props.background === "Template1" && (
        <div
          className="absolute inset-0"
          style={{ background: props.primaryColor }}
        >
          {/* TOP WAVE */}
          <svg viewBox="0 0 1440 200" className="absolute top-0 left-0 w-full">
            <path
              fill="#ffffff"
              d="M0,96L60,101.3C120,107,240,117,360,101.3C480,85,600,43,720,48C840,53,960,107,1080,117.3C1200,128,1320,96,1380,80L1440,64V0H0Z"
            />
          </svg>
        </div>
      )}

      {props.background === "Template2" && (
        <div className="absolute inset-0" style={{ background: "#f3f3f3" }}>
          {/* LEFT WAVE */}
          <svg viewBox="0 0 500 600" className="absolute left-0 top-0 h-full">
            <path fill={props.primaryColor} d="M0,0 C300,100 300,500 0,600 Z" />
          </svg>
        </div>
      )}

      {props.background === "Template3" && (
        <div
          className="absolute inset-0"
          style={{ background: props.primaryColor }}
        />
      )}

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-2 gap-16 items-center">
        {/* PHONE */}
        <div className={cx("flex", mobileFrameAlign[props.alignMobileFrame])}>
          <img src={data.shop_images[0].uri} className="w-[280px]" />
        </div>

        {/* TEXT */}
        <div
          className={cx(
            "flex flex-col gap-6",
            alignText[props.alignDownloadAppText],
          )}
        >
          <h2
            className={cx(headingSize[props.heading.size], "font-bold")}
            style={{ color: props.secondaryColor }}
          >
            Download the App!
          </h2>

          <p className={descriptionSize[props.descriptionSize]}>
            We want to make it easy and convenient for people like you to order
            from the comfort of your own home. What are you waiting for? It's
            time for us to connect.
          </p>

          {/* STORE BUTTONS */}
          <div className="flex gap-4">
            <img
              src="/playstore.png"
              className={cx(
                buttonSize[props.appButtonsSize],
                buttonShape[props.appButtons],
              )}
            />

            <img
              src="/applestore.png"
              className={cx(
                buttonSize[props.appButtonsSize],
                buttonShape[props.appButtons],
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
