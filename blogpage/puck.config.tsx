import React from "react";
import { DropZone, type Config } from "@puckeditor/core";

import {
  Card,
  CardProps,
  Column,
  ColumnProps,
  Row,
  RowProps,
  Section,
  SectionProps,
  NavigationBar,
  NavigationBarProps,
  HeroProps,
  HeroComponent,
  FooterProps,
  Footer,
  ContactInfoProps,
  ContactInfo,
  OpeningHoursProps,
  OpeningHours,
  EventSection,
  EventSectionProps,
} from "./components/examples";

interface Components {
  Section: React.PropsWithChildren<SectionProps>;
  Card: React.PropsWithChildren<CardProps>;
  Row: React.PropsWithChildren<RowProps>;
  Column: React.PropsWithChildren<ColumnProps>;
  Placeholder: { text: string };
  NavigationBar: React.PropsWithChildren<NavigationBarProps>;
  HeroComponent: React.PropsWithChildren<HeroProps>;
  Footer: React.PropsWithChildren<FooterProps>;
  ContactInfo: React.PropsWithChildren<ContactInfoProps>;
  OpeningHours: React.PropsWithChildren<OpeningHoursProps>;
  EventSection: React.PropsWithChildren<EventSectionProps>;
}

const config: Config<Components> = {
  components: {
    Section: {
      fields: {
        bg: {
          type: "select",
          options: [
            { label: "blue", value: "blue" },
            { label: "green", value: "green" },
            { label: "gray", value: "gray" },
          ],
        },
        inGrid: {
          type: "radio",
          options: [
            { label: "tak", value: true },
            { label: "nie", value: false },
          ],
        },
      },
      defaultProps: {
        children: <div className="p-3 text-sm font-bold">Placeholder</div>,
      },
      render(props) {
        return (
          <Section {...props}>
            <DropZone zone="section" />
          </Section>
        );
      },
    },
    Card: {
      fields: {
        bg: {
          type: "select",
          options: [
            { label: "white", value: "white" },
            { label: "purple", value: "purple" },
            { label: "amber", value: "amber" },
          ],
        },
        inset: { type: "number" },
        rounded: {
          type: "select",
          options: [
            { label: "sm", value: "sm" },
            { label: "md", value: "md" },
            { label: "lg", value: "lg" },
          ],
        },
        description: {
          type: "textarea",
        },
      },
      defaultProps: {
        bg: "white",
        inset: 0,
        rounded: undefined,
      },
      render(props) {
        return (
          <Card {...props}>
            <DropZone zone="card" />
          </Card>
        );
      },
    },
    Row: {
      fields: {
        inset: { type: "number" },
      },
      defaultProps: {
        inset: 0,
      },
      render(props) {
        return (
          <Row {...props}>
            <DropZone zone="row" />
          </Row>
        );
      },
    },
    Column: {
      fields: {
        colsS: { type: "number" },
        colsM: { type: "number" },
        colsL: { type: "number" },
      },
      defaultProps: {
        colsS: 2,
        colsM: 6,
        colsL: 12,
      },
      render(props) {
        return (
          <Column {...props}>
            <DropZone zone="column" />
          </Column>
        );
      },
    },
    Placeholder: {
      fields: {
        text: { type: "text", label: "Text" },
      },
      defaultProps: {
        text: "Placeholder",
      },
      render(props) {
        return <div>{props.text}</div>;
      },
    },
    NavigationBar: {
      fields: {
        BackgroundColor: { type: "text" },
        TextIconColor: { type: "text" },
        GapFromTop: { type: "number" },
        GapFromBottom: { type: "number" },
        BackgroundStyle: {
          type: "select",
          options: [
            { label: "solid", value: "solid" },
            { label: "blur", value: "blur" },
            { label: "transparent", value: "transparent" },
          ],
        },
        Sticky: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        Logo: { type: "text" },
        ShowLogo: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        LogoSize: {
          type: "select",
          options: [
            { label: "sm", value: "sm" },
            { label: "md", value: "md" },
            { label: "lg", value: "lg" },
          ],
        },
      },
      defaultProps: {
        BackgroundColor: "white",
        TextIconColor: "black",
        GapFromTop: 0,
        GapFromBottom: 0,
        BackgroundStyle: "solid",
        Sticky: false,
        ShowLogo: true,
        LogoSize: "md",
        Logo: "/logo.png",
      },
      render(props) {
        return (
          <NavigationBar {...props}>
            <DropZone zone="navigation-bar" />
          </NavigationBar>
        );
      },
    },
    HeroComponent: {
      fields: {
        PrimaryColor: { type: "text", label: "Primary Background Color" },
        SecondaryColor: { type: "text", label: "Text / Accent Color" },
        Align: {
          type: "radio",
          label: "Center Title & Subtitle?",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        AlignMobileView: {
          type: "radio",
          label: "Center on Mobile?",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },

        // AppButtons
        AppButtonsAlign: {
          type: "select",
          label: "Buttons Alignment",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        AppButtonsShape: {
          type: "select",
          label: "Buttons Shape",
          options: [
            { label: "Square", value: "square" },
            { label: "Rounded", value: "rounded" },
            { label: "Pill", value: "pill" },
          ],
        },

        BackGroundImage: { type: "text", label: "Background Image URL" },
        LogoUrl: { type: "text", label: "Logo Image URL" },

        // Logo
        "Logo.OnDeskTopView": {
          type: "radio",
          label: "Show Logo on Desktop?",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        "Logo.Size": {
          type: "select",
          label: "Logo Size",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
        "Logo.DeskTopViewLeftSideLogo": {
          type: "radio",
          label: "Logo on Left Side on Desktop?",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },

        BgShadowOnDeskTop: {
          type: "radio",
          label: "Enable Shadow on Desktop?",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },

        // Title
        "Title.FontSize": {
          type: "select",
          label: "Title Font Size",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
        "Title.Level": {
          type: "select",
          label: "Title Heading Level",
          options: [
            { label: "H1", value: "1" },
            { label: "H2", value: "2" },
            { label: "H3", value: "3" },
            { label: "H4", value: "4" },
            { label: "H5", value: "5" },
            { label: "H6", value: "6" },
          ],
        },
        "Title.TextTransForm": {
          type: "radio",
          label: "Uppercase Title?",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },

        // SubTitle
        "SubTitle.FontSize": {
          type: "select",
          label: "Subtitle Font Size",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
            { label: "XL", value: "xl" },
            { label: "2XL", value: "2xl" },
          ],
        },
        "SubTitle.Level": {
          type: "select",
          label: "Subtitle Heading Level",
          options: [
            { label: "H1", value: "1" },
            { label: "H2", value: "2" },
            { label: "H3", value: "3" },
            { label: "H4", value: "4" },
            { label: "H5", value: "5" },
            { label: "H6", value: "6" },
          ],
        },
        "SubTitle.TextTransForm": {
          type: "radio",
          label: "Uppercase Subtitle?",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },

        // Order Now Button
        "OrderNow.HoverTextColor": {
          type: "text",
          label: "Order Now Hover Text Color",
        },
        "OrderNow.Size": {
          type: "select",
          label: "Order Now Button Size",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
        "OrderNow.Shape": {
          type: "radio",
          label: "Round Order Now Button?",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        "OrderNow.Border": {
          type: "select",
          label: "Order Now Border Width",
          options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
          ],
        },
        "OrderNow.BorderColor": {
          type: "text",
          label: "Order Now Border Color",
        },
        "OrderNow.Rounded": {
          type: "select",
          label: "Order Now Border Radius",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
        "OrderNow.TextTransform": {
          type: "radio",
          label: "Uppercase Order Now?",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },

        // Reserve Now Button
        "ReserveNow.BackGroundColor": {
          type: "text",
          label: "Reserve Now Background Color",
        },
        "ReserveNow.TextColor": {
          type: "text",
          label: "Reserve Now Text Color",
        },
        "ReserveNow.Size": {
          type: "select",
          label: "Reserve Now Button Size",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
        "ReserveNow.Shape": {
          type: "radio",
          label: "Round Reserve Now Button?",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        "ReserveNow.Border": {
          type: "select",
          label: "Reserve Now Border Width",
          options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
          ],
        },
        "ReserveNow.BorderColor": {
          type: "text",
          label: "Reserve Now Border Color",
        },
        "ReserveNow.Rounded": {
          type: "select",
          label: "Reserve Now Border Radius",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
        "ReserveNow.TextTransform": {
          type: "radio",
          label: "Uppercase Reserve Now?",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },

      defaultProps: {
        PrimaryColor: "#ffffff",
        SecondaryColor: "#1a202c",
        Align: true,
        AlignMobileView: true,
        AppButtonsAlign: "center",
        AppButtonsShape: "pill",
        BackGroundImage: "",
        LogoUrl: "/logo.png",
        "Logo.OnDeskTopView": true,
        "Logo.Size": "md",
        "Logo.DeskTopViewLeftSideLogo": true,
        BgShadowOnDeskTop: true,
        "Title.FontSize": "lg",
        "Title.Level": "1",
        "Title.TextTransForm": false,
        "SubTitle.FontSize": "xl",
        "SubTitle.Level": "2",
        "SubTitle.TextTransForm": false,
        "OrderNow.HoverTextColor": "#ffffff",
        "OrderNow.Size": "md",
        "OrderNow.Shape": true,
        "OrderNow.Border": "2",
        "OrderNow.BorderColor": "#000000",
        "OrderNow.Rounded": "md",
        "OrderNow.TextTransform": false,
        "ReserveNow.BackGroundColor": "#000000",
        "ReserveNow.TextColor": "#ffffff",
        "ReserveNow.Size": "md",
        "ReserveNow.Shape": true,
        "ReserveNow.Border": "2",
        "ReserveNow.BorderColor": "#000000",
        "ReserveNow.Rounded": "md",
        "ReserveNow.TextTransform": false,
      },

      render(props: HeroProps) {
        return (
          <HeroComponent {...props}>
            <DropZone zone="hero" />
          </HeroComponent>
        );
      },
    },
    Footer: {
      fields: {
        PrimaryColor: { type: "text" },
        SecondaryColor: { type: "text" },
        GapFromTop: { type: "number" },
        GapFromBottom: { type: "number" },
        Layout: {
          type: "select",
          options: [
            { label: "Columns", value: "Columns" },
            { label: "Simple", value: "Simple" },
          ],
        },
        ShowLogo: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        ShowSocials: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        ShowContact: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        Logo: { type: "text" },

        // links is an array of objects with label and href
        links: {
          type: "array",
          arrayFields: {
            label: { type: "text" },
            href: { type: "text" },
          },
        },

        CopyrightText: { type: "text" },
      },
      defaultProps: {
        PrimaryColor: "#000000",
        SecondaryColor: "#ffffff",
        GapFromTop: 0,
        GapFromBottom: 0,
        Layout: "Simple",
        ShowLogo: false,
        ShowSocials: false,
        ShowContact: false,
        Logo: "/logo.png",
        links: [
          { label: "Terms", href: "#" },
          { label: "Privacy", href: "#" },
        ],
        CopyrightText: "© 2026 Your Company",
      },
      render(props) {
        return <Footer {...props} />;
      },
    },
    ContactInfo: {
      fields: {
        PrimaryColor: { type: "text" },
        SecondaryColor: { type: "text" },
        GapFromTop: { type: "number" },
        GapFromBottom: { type: "number" },

        Layout: {
          type: "select",
          options: [
            { label: "Stacked", value: "stacked" },
            { label: "Row", value: "Row" },
            { label: "Cards", value: "Cards" },
          ],
        },

        HeadingText: { type: "text" },

        HeadingSize: {
          type: "select",
          options: [
            { label: "SM", value: "sm" },
            { label: "MD", value: "md" },
            { label: "LG", value: "lg" },
            { label: "XL", value: "xl" },
            { label: "2XL", value: "2xl" },
          ],
        },

        HeadingWeight: {
          type: "select",
          options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
          ],
        },

        ShowPhone: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },

        ShowEmail: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },

        ShowAddres: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },

        ShowSocials: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },

      defaultProps: {
        PrimaryColor: "#ffffff",
        SecondaryColor: "#000000",
        GapFromTop: 0,
        GapFromBottom: 0,

        Layout: "stacked",

        HeadingText: "Contact Us",
        HeadingSize: "lg",
        HeadingWeight: "4",

        ShowPhone: true,
        ShowEmail: true,
        ShowAddres: true,
        ShowSocials: true,
      },

      render(props) {
        return <ContactInfo {...props} />;
      },
    },
    OpeningHours: {
      fields: {
        PrimaryColor: { type: "text" },
        SecondaryColor: { type: "text" },

        GapFromTop: { type: "number" },
        GapFromBottom: { type: "number" },

        DisplaySize: {
          type: "select",
          options: [
            { label: "Table", value: "Table" },
            { label: "List", value: "List" },
          ],
        },

        ShowClosedDays: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },

        HeadingText: { type: "text" },

        HeadingSize: {
          type: "select",
          options: [
            { label: "SM", value: "sm" },
            { label: "MD", value: "md" },
            { label: "LG", value: "lg" },
            { label: "XL", value: "xl" },
            { label: "2XL", value: "2xl" },
          ],
        },

        HeadingWeight: {
          type: "select",
          options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
          ],
        },
      },

      defaultProps: {
        PrimaryColor: "#000000",
        SecondaryColor: "#555555",

        GapFromTop: 0,
        GapFromBottom: 0,

        DisplaySize: "Table",
        ShowClosedDays: true,

        HeadingText: "Opening Hours",
        HeadingSize: "lg",
        HeadingWeight: "4",
      },

      render(props) {
        return <OpeningHours {...props} />;
      },
    },
    EventSection: {
      fields: {
        PrimaryColor: { type: "text" },
        SecondaryColor: { type: "text" },

        GapFromTop: { type: "number" },
        GapFromBottom: { type: "number" },

        Columns: { type: "number" },

        CardShape: {
          type: "select",
          options: [
            { label: "Square", value: "square" },
            { label: "Rounded", value: "rounded" },
            { label: "Pill", value: "pill" },
          ],
        },

        ShowDate: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },

        MaxItems: { type: "number" },

        HeadingText: { type: "text" },

        HeadingSize: {
          type: "select",
          options: [
            { label: "SM", value: "sm" },
            { label: "MD", value: "md" },
            { label: "LG", value: "lg" },
            { label: "XL", value: "xl" },
            { label: "2XL", value: "2xl" },
          ],
        },

        HeadingWeight: {
          type: "select",
          options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
          ],
        },
      },

      defaultProps: {
        PrimaryColor: "#5b4636",
        SecondaryColor: "#333",

        GapFromTop: 0,
        GapFromBottom: 0,

        Columns: 3,
        CardShape: "rounded",

        ShowDate: true,
        MaxItems: 3,

        HeadingText: "Upcoming Events",
        HeadingSize: "xl",
        HeadingWeight: "5",
      },

      render(props) {
        return <EventSection {...props} />;
      },
    },
  },
};

export default config;
