import { cx } from "class-variance-authority";
import { useState } from "react";

export interface FAQItem {
  Question: string;
  Answer: string;
}

export interface FAQSectionProps {
  PrimaryColor: string;
  SecondaryColor: string;
  HeadingText: string;
  HeadingSize: "sm" | "md" | "lg" | "xl" | "2xl";
  HeadingWeight: "1" | "2" | "3" | "4" | "5" | "6";
  GapFromTop: number;
  GapFromBottom: number;
  DisplayStyle: "Accordion" | "List" | "Simple";
  FAQItems: FAQItem[];
}

export function FAQSection(props: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  return (
    <section
      style={{
        marginTop: props.GapFromTop,
        marginBottom: props.GapFromBottom,
      }}
      className="w-full py-16 px-6 flex flex-col items-center"
    >
      <h2
        className={cx(
          "mb-8 text-center",
          headingSizeClass[props.HeadingSize],
          headingWeightClass[props.HeadingWeight],
        )}
      >
        {props.HeadingText}
      </h2>

      <div className="w-full max-w-3xl space-y-4">
        {props.FAQItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={cx(
                  "w-full text-left px-6 py-4 flex justify-between items-center font-medium",
                  isOpen && "text-white",
                )}
                style={{
                  backgroundColor: isOpen ? props.PrimaryColor : "white",
                }}
              >
                {item.Question}
                <span>{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div
                  className="px-6 py-4"
                  style={{ backgroundColor: props.SecondaryColor }}
                >
                  {item.Answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
