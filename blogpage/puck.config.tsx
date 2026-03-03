import React from "react";
import { DropZone, type Config } from "@puckeditor/core";
import { Hero } from "./components/sections/Hero";
import { ContactInfo } from "./components/sections/ContactInfo";
import { Navbar } from "./components/sections/Navbar";
import { Footer } from "./components/sections/Footer";
import { PaymentLogo } from "./components/sections/PaymentLogo";
import { Review } from "./components/sections/Review";
import { AboutUs } from "./components/sections/AboutUs";

type Props = {
  Columns: {
    columns?: number;
    gap?: number;
  };
  VerticalSpace: {
    height?: number;
  };
  Heading: {
    text: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
  };
  Subheading: {
    text: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
  };
  Text: {
    text: string;
  };
  Hero: {
    backgroundImage: string;
    title: string;
    subtitle: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    primaryColor: string;
    secondaryColor: string;
  };
  PaymentLogo: {
    logos: { logo: string }[];
  };
  Footer: {
    text: string;
  };
  Navbar: {
    logo: string;
    links: { label: string; href: string }[];
  };
  ContactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  Section: {
    padding?: number;
    backgroundColor?: string;
    maxWidth?: number;
  };
};

export const config: Config<Props> = {
  components: {
    Columns: {
      fields: {
        columns: {
          type: "number",
          label: "Columns",
          min: 1,
          max: 4,
        },
        gap: {
          type: "number",
          label: "Gap",
        },
      },
      defaultProps: {
        columns: 2,
        gap: 20,
      },
      render: ({ columns, gap }) => (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: `${gap}px`,
          }}
        >
          <DropZone zone="columns-content" />
        </div>
      ),
    },

    Heading: {
      fields: {
        text: { type: "text", label: "Text" },
        level: {
          type: "select",
          label: "Level",
          options: [
            { label: "H1", value: 1 },
            { label: "H2", value: 2 },
            { label: "H3", value: 3 },
            { label: "H4", value: 4 },
            { label: "H5", value: 5 },
            { label: "H6", value: 6 },
          ],
        },
      },
      defaultProps: {
        text: "Heading",
        level: 1,
      },
      render: ({ text, level }) => {
        const Tag = `h${level}` as React.ElementType;
        return React.createElement(Tag, null, text);
      },
    },

    Subheading: {
      fields: {
        text: { type: "text", label: "Text" },
        level: {
          type: "select",
          label: "Level",
          options: [
            { label: "H2", value: 2 },
            { label: "H3", value: 3 },
            { label: "H4", value: 4 },
          ],
        },
      },
      defaultProps: {
        text: "Subheading",
        level: 2,
      },
      render: ({ text, level }) => {
        const Tag = `h${level}` as React.ElementType;
        return React.createElement(Tag, null, text);
      },
    },

    Text: {
      fields: {
        text: { type: "textarea", label: "Text" },
      },
      defaultProps: {
        text: "Sample text...",
      },
      render: ({ text }) => <p>{text}</p>,
    },

    Hero: {
      fields: {
        backgroundImage: { type: "text", label: "Background Image URL" },
        title: { type: "text", label: "Title" },
        subtitle: { type: "textarea", label: "Subtitle" },
        primaryButtonText: { type: "text", label: "Primary Button Text" },
        secondaryButtonText: { type: "text", label: "Secondary Button Text" },
        primaryColor: { type: "text", label: "Primary Color" },
        secondaryColor: { type: "text", label: "Secondary Color" },
      },
      defaultProps: {
        backgroundImage: "",
        title: "Hero Title",
        subtitle: "Hero description goes here.",
        primaryButtonText: "Order Now",
        secondaryButtonText: "Reserve Now",
        primaryColor: "#FFB347",
        secondaryColor: "#ffffff",
      },
      render: (props) => <Hero {...props} />,
    },

    PaymentLogo: {
      fields: {
        logos: {
          type: "array",
          label: "Logos",
          arrayFields: {
            logo: { type: "text", label: "Logo URL" },
          },
        },
      },
      defaultProps: {
        logos: [],
      },
      render: (props) => <PaymentLogo {...props} />,
    },

    Footer: {
      fields: {
        text: { type: "text" },
      },
      defaultProps: {
        text: "© 2026 Your Company",
      },
      render: (props) => <Footer {...props} />,
    },

    Navbar: {
      fields: {
        logo: { type: "text", label: "Logo Text" },
        links: {
          type: "array",
          label: "Navigation Links",
          arrayFields: {
            label: { type: "text", label: "Label" },
            href: { type: "text", label: "URL" },
          },
        },
      },
      defaultProps: {
        logo: "My Website",
        links: [
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ],
      },
      render: (props) => <Navbar {...props} />,
    },
    Section: {
      category: "layout", // or "other" if you prefer
      fields: {
        padding: {
          type: "number",
          label: "Padding",
        },
        backgroundColor: {
          type: "text",
          label: "Background Color",
        },
        maxWidth: {
          type: "number",
          label: "Max Width",
        },
      },
      defaultProps: {
        padding: 60,
        backgroundColor: "#ffffff",
        maxWidth: 1200,
      },
      render: ({ padding, backgroundColor, maxWidth }) => (
        <section
          style={{
            padding: `${padding}px 20px`,
            backgroundColor,
          }}
        >
          <div
            style={{
              maxWidth: `${maxWidth}px`,
              margin: "0 auto",
            }}
          >
            <DropZone zone="section-content" />
          </div>
        </section>
      ),
    },
    ContactInfo: {
      fields: {
        phone: { type: "text" },
        email: { type: "text" },
        address: { type: "textarea" },
      },
      defaultProps: {
        phone: "+91 9876543210",
        email: "info@example.com",
        address: "Mumbai, India",
      },
      render: (props) => <ContactInfo {...props} />,
    },
  },
};

export default config;
