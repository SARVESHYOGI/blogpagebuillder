import { cx } from "class-variance-authority";

export interface AppSectionProps {
  primaryColor: string;
  secondaryColor: string;
  gapFromTop: number;
  gapFromBottom: number;

  background: "Template1" | "Template2";

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
    L: "text-4xl",
    M: "text-3xl",
    S: "text-2xl",
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
        background: props.primaryColor,
      }}
      className="w-full py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12 items-center">
        {/* PHONE MOCKUP */}
        <div className={cx("flex", mobileFrameAlign[props.alignMobileFrame])}>
          <img src="/mobile-frame.png" className="w-[260px]" />
        </div>

        {/* CONTENT */}
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
            from the comfort of your own home. What are you waiting for? It’s
            time for us to connect.
          </p>

          {/* STORE BUTTONS */}
          <div className="flex gap-4">
            <img
              src="/google-play.png"
              className={cx(
                buttonSize[props.appButtonsSize],
                buttonShape[props.appButtons],
              )}
            />

            <img
              src="/app-store.png"
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
