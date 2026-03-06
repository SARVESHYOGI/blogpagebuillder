import React from "react";
import { type Config } from "@puckeditor/core";
import { SectionBlock } from "./components/block/Section/SectionBlock";
import { SectionProps } from "./components/block/Section/Section";
import { CardBlock } from "./components/block/Card/CardBlock";
import { CardProps } from "./components/block/Card/Card";
import { RowBlock } from "./components/block/Row/RowBlock";
import { RowProps } from "./components/block/Row/Row";
import { ColumnBlock } from "./components/block/Column/ColumnBlock";
import { ColumnProps } from "./components/block/Column/Column";
import { NavigationBarBlock } from "./components/block/NavigationBar/NavigationBarBlock";
import { HeroComponentBlock } from "./components/block/HeroComponent/HeroComponentBlock";
import { FooterBlock } from "./components/block/Footer/FooterBlock";
import { ContactInfoBlock } from "./components/block/ContactInfo/ContactInfoBlock";
import { NavigationBarProps } from "./components/block/NavigationBar/NavigationBar";
import { HeroProps } from "./components/block/HeroComponent/HeroComponent";
import { FooterProps } from "./components/block/Footer/Footer";
import { ContactInfoProps } from "./components/block/ContactInfo/ContactInfo";
import { OpeningHoursProps } from "./components/block/OpeningHours/OpeningHours";
import { EventSectionProps } from "./components/block/EventSection/EventSection";
import { LocationMapProps } from "./components/block/LocationMap/LocationMap";
import { CateringCTAProps } from "./components/block/CateringCTA/CateringCTA";
import { FAQSectionProps } from "./components/block/FAQSection/FAQSection";
import { AppSectionProps } from "./components/block/AppSection/AppSection";
import { MenuDetailsProps } from "./components/block/MenuDetails/MenuDetails";
import { OpeningHoursBlock } from "./components/block/OpeningHours/OpeningHoursBlock";
import { EventSectionBlock } from "./components/block/EventSection/EventSectionBlock";
import { LocationMapBlock } from "./components/block/LocationMap/LocationMapBlock";
import { CateringCTABlock } from "./components/block/CateringCTA/CateringCTABlock";
import { FAQSectionBlock } from "./components/block/FAQSection/FAQSectionBlock";
import { AppSectionBlock } from "./components/block/AppSection/AppSectionBlock";
import { MenuDetailsBlock } from "./components/block/MenuDetails/MenuDetailsBlock";
import { OrderTypesProps } from "./components/block/OrderTypes/OrderTypes";
import { OrderTypesBlock } from "./components/block/OrderTypes/OrderTypesBlock";
import { ReviewProps } from "./components/block/Review/Review";
import { ReviewBlock } from "./components/block/Review/ReviewBlock";
import { AboutUsCardProps } from "./components/block/AboutUs/AboutUs";
import { AboutUsCardBlock } from "./components/block/AboutUs/AboutUsBlock";
import { PopularProductCardProps } from "./components/block/PopularProductCard/PopularProductCard";
import { PopularProductCardBlock } from "./components/block/PopularProductCard/PopularProductCardBlock";
import { PaymentLogosBlock } from "./components/block/PaymentLogos/PaymentLogosBlock";
import { PaymentLogosProps } from "./components/block/PaymentLogos/PaymentLogos";

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
  LocationMap: React.PropsWithChildren<LocationMapProps>;
  CateringCTA: React.PropsWithChildren<CateringCTAProps>;
  FAQSection: React.PropsWithChildren<FAQSectionProps>;
  AppSection: React.PropsWithChildren<AppSectionProps>;
  MenuDetails: React.PropsWithChildren<MenuDetailsProps>;
  OrderType: React.PropsWithChildren<OrderTypesProps>;
  Review: React.PropsWithChildren<ReviewProps>;
  AboutUs: React.PropsWithChildren<AboutUsCardProps>;
  PopularProductCard: React.PropsWithChildren<PopularProductCardProps>;
  PaymentLogos: React.PropsWithChildren<PaymentLogosProps>;
}

const config: Config<Components> = {
  categories: {
    layout: {
      title: "LAYOUT",
      components: ["Section", "Row", "Column", "Card"],
    },

    navigation: {
      title: "NAVIGATION",
      components: ["NavigationBar", "Footer"],
    },

    sections: {
      title: "SECTIONS",
      components: [
        "HeroComponent",
        "AboutUs",
        "PopularProductCard",
        "MenuDetails",
        "OrderType",
        "Review",
        "AppSection",
        "FAQSection",
        "EventSection",
        "CateringCTA",
      ],
    },

    info: {
      title: "INFO",
      components: [
        "ContactInfo",
        "OpeningHours",
        "LocationMap",
        "PaymentLogos",
      ],
    },

    misc: {
      title: "OTHER",
      components: ["Placeholder"],
    },
  },

  components: {
    Section: SectionBlock,
    Card: CardBlock,
    Row: RowBlock,
    Column: ColumnBlock,
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
    NavigationBar: NavigationBarBlock,
    HeroComponent: HeroComponentBlock,
    Footer: FooterBlock,
    ContactInfo: ContactInfoBlock,
    OpeningHours: OpeningHoursBlock,
    EventSection: EventSectionBlock,
    LocationMap: LocationMapBlock,
    CateringCTA: CateringCTABlock,
    FAQSection: FAQSectionBlock,
    AppSection: AppSectionBlock,
    MenuDetails: MenuDetailsBlock,
    OrderType: OrderTypesBlock,
    Review: ReviewBlock,
    AboutUs: AboutUsCardBlock,
    PopularProductCard: PopularProductCardBlock,
    PaymentLogos: PaymentLogosBlock,
  },
};

export default config;
