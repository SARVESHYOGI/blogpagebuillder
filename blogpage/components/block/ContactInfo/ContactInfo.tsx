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
  SecondaryColor = "#000000",
  GapFromTop = 0,
  GapFromBottom = 0,
  Layout = "stacked",
  HeadingText = "Contact Us",
  HeadingSize = "lg",
  HeadingWeight = "4",
  ShowPhone = true,
  ShowEmail = true,
  ShowAddres = true,
  ShowSocials = true,
}: ContactInfoProps) {
  const headingSizeClass = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
    "2xl": "text-3xl",
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
    "flex flex-col space-y-4": Layout === "stacked",
    "flex flex-row space-x-8": Layout === "Row",
    "grid grid-cols-1 md:grid-cols-3 gap-6": Layout === "Cards",
  });

  const cardClass =
    Layout === "Cards" ? "p-4 border rounded-lg shadow-sm text-center" : "";

  return (
    <section
      style={{
        marginTop: GapFromTop,
        marginBottom: GapFromBottom,
        backgroundColor: PrimaryColor,
        color: SecondaryColor,
      }}
      className="px-6 py-8"
    >
      {/* Heading */}
      <h2
        className={cx(
          "mb-6",
          headingSizeClass[HeadingSize],
          headingWeightClass[HeadingWeight],
        )}
      >
        {HeadingText}
      </h2>

      {/* Content */}
      <div className={layoutClass}>
        {ShowPhone && (
          <div className={cardClass}>
            <p className="font-semibold">Phone</p>
            <p>+1 (555) 123-4567</p>
          </div>
        )}

        {ShowEmail && (
          <div className={cardClass}>
            <p className="font-semibold">Email</p>
            <p>contact@example.com</p>
          </div>
        )}

        {ShowAddres && (
          <div className={cardClass}>
            <p className="font-semibold">Address</p>
            <p>123 Main Street, City</p>
          </div>
        )}

        {ShowSocials && (
          <div className={cardClass}>
            <p className="font-semibold">Social</p>
            <div className="flex justify-center space-x-4 mt-2">
              <span>🔵 abcdefghijklmnop</span>
              <span>🐦 abcdefghijklmnop</span>
              <span>📸 abcdefghijklmnop</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
