import { ComponentConfig } from "@puckeditor/core";
import { FAQSection, FAQSectionProps } from "./FAQSection";
import React from "react";

export const FAQSectionBlock: ComponentConfig<
  React.PropsWithChildren<FAQSectionProps>
> = {
  fields: {
    PrimaryColor: { type: "text" },
    SecondaryColor: { type: "text" },

    HeadingText: { type: "text" },

    HeadingSize: {
      type: "select",
      options: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
        { label: "XL", value: "xl" },
        { label: "2XL", value: "2xl" },
      ],
    },

    HeadingWeight: {
      type: "select",
      options: [
        { label: "Thin", value: "1" },
        { label: "Light", value: "2" },
        { label: "Normal", value: "3" },
        { label: "Medium", value: "4" },
        { label: "SemiBold", value: "5" },
        { label: "Bold", value: "6" },
      ],
    },

    DisplayStyle: {
      type: "select",
      options: [
        { label: "Accordion", value: "Accordion" },
        { label: "List", value: "List" },
        { label: "Simple", value: "Simple" },
      ],
    },

    GapFromTop: { type: "number" },
    GapFromBottom: { type: "number" },

    FAQItems: {
      type: "array",
      arrayFields: {
        Question: { type: "text" },
        Answer: { type: "textarea" },
      },
    },
  },

  defaultProps: {
    PrimaryColor: "#F59E0B",
    SecondaryColor: "#F9FAFB",

    HeadingText: "Frequently Asked Questions",

    HeadingSize: "xl",
    HeadingWeight: "6",

    DisplayStyle: "Accordion",

    GapFromTop: 40,
    GapFromBottom: 40,

    FAQItems: [
      {
        Question: "What are your opening hours?",
        Answer: "We are open Monday to Friday 11am–10pm, weekends 10am–11pm.",
      },
      {
        Question: "Do you offer catering services?",
        Answer: "Yes, we offer catering for private and corporate events.",
      },
      {
        Question: "Is parking available?",
        Answer: "Yes, free parking is available for all guests.",
      },
    ],
  },

  render(props) {
    return <FAQSection {...props} />;
  },
};
