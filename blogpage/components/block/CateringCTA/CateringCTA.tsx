import { cx } from "class-variance-authority";

export interface CateringCTAProps {
  PrimaryColor: string;
  SecondaryColor: string;
  GapFromTop: number;
  GapFromBottom: number;
  Layout: "Centered" | "Split";
  BackgroundStyle: "Solid" | "Gradient";
  HeadingText: string;
  HeadingSize: "sm" | "md" | "lg" | "xl" | "2xl";
  HeadingWeight: "1" | "2" | "3" | "4" | "5" | "6";
  SubText: string;
  CTAButtonText: string;
  CTAButtonURL: string;
  ButtonShape: "rounded" | "pill";
}
export function CateringCTA(props: CateringCTAProps) {
  const headingSizeClass = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
    "2xl": "text-4xl",
  };

  const headingWeightClass = {
    "1": "font-thin",
    "2": "font-light",
    "3": "font-normal",
    "4": "font-medium",
    "5": "font-semibold",
    "6": "font-bold",
  };

  const buttonShapeClass = {
    rounded: "rounded-md",
    pill: "rounded-full",
  };

  const layoutClass = {
    Centered: "text-center items-center",
    Split: "text-left items-start flex-row justify-between",
  };

  const backgroundStyle =
    props.BackgroundStyle === "Gradient"
      ? {
          background: `linear-gradient(135deg, ${props.PrimaryColor}, ${props.SecondaryColor})`,
        }
      : {
          background: props.PrimaryColor,
        };

  return (
    <section
      style={{
        marginTop: props.GapFromTop,
        marginBottom: props.GapFromBottom,
        ...backgroundStyle,
      }}
      className="w-full py-16 px-6 flex justify-center"
    >
      <div
        className={cx(
          "max-w-4xl w-full flex flex-col gap-4",
          layoutClass[props.Layout],
        )}
      >
        <h2
          className={cx(
            headingSizeClass[props.HeadingSize],
            headingWeightClass[props.HeadingWeight],
            "text-black",
          )}
        >
          {props.HeadingText}
        </h2>

        <p className="text-sm text-black/70 max-w-xl">{props.SubText}</p>

        <div>
          <a
            href={props.CTAButtonURL}
            className={cx(
              "inline-block px-6 py-3 mt-4 font-medium text-white transition",
              buttonShapeClass[props.ButtonShape],
            )}
            style={{ backgroundColor: props.SecondaryColor }}
          >
            {props.CTAButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
