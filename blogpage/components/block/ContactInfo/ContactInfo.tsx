import { cx } from "class-variance-authority";

export interface ContactInfoProps {
  PrimaryColor: string;
  SecondaryColor: string;
  GapFromTop: number;
  GapFromBottom: number;
  Layout: "stacked" | "Row" | "Cards";
  HeadingText: string;
  HeadingSize: "sm" | "md" | "lg" | "xl" | "2xl";
  HeadingWeight: "1" | "2" | "3" | "4" | "5" | "6";
  ShowPhone: boolean;
  ShowEmail: boolean;
  ShowAddres: boolean;
  ShowSocials: boolean;
}

export function ContactInfo({
  PrimaryColor = "#ffffff",
  SecondaryColor = "#e89aa6",
  GapFromTop = 0,
  GapFromBottom = 0,
  Layout = "stacked",
  HeadingText = "Contact Us",
  HeadingSize = "2xl",
  HeadingWeight = "6",
  ShowPhone = true,
  ShowEmail = true,
  ShowAddres = true,
  ShowSocials = true,
}: ContactInfoProps) {
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

  const layoutClass = cx({
    "flex flex-col items-center space-y-4": Layout === "stacked",
    "flex flex-row justify-center space-x-10": Layout === "Row",
    "grid grid-cols-1 md:grid-cols-3 gap-6": Layout === "Cards",
  });

  const cardClass =
    Layout === "Cards"
      ? "p-4 border rounded-lg shadow-sm text-center"
      : "flex items-center gap-3";

  return (
    <section
      style={{
        marginTop: GapFromTop,
        marginBottom: GapFromBottom,
        backgroundColor: PrimaryColor,
        color: SecondaryColor,
      }}
      className="px-6 py-16 text-center"
    >
      {/* HEADING */}
      <h2
        className={cx(
          "mb-6",
          headingSizeClass[HeadingSize],
          headingWeightClass[HeadingWeight],
        )}
      >
        {HeadingText}
      </h2>

      {/* CONTACT CONTENT */}
      <div className={layoutClass}>
        {ShowPhone && (
          <div className={cardClass}>
            <span>📞</span>
            <span>491511234599</span>
          </div>
        )}

        {ShowEmail && (
          <div className={cardClass}>
            <span>✉️</span>
            <span>md@tes.com</span>
          </div>
        )}

        {ShowAddres && (
          <div className={cardClass}>
            <span>📍</span>
            <span>Am Dreispitz 3, 63741 Aschaffenburg, Germany</span>
          </div>
        )}

        {/* SOCIAL ICONS */}
        {ShowSocials && (
          <div className="flex justify-center gap-4 mt-6">
            {["F", "I", "T", "Y", "W"].map((item, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full flex items-center justify-center font-semibold"
                style={{
                  background: SecondaryColor,
                  color: PrimaryColor,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
