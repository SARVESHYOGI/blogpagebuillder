import React from "react";
import { type Config } from "@puckeditor/core";
// import { SectionBlock } from "./components/block/Section/SectionBlock";
// import { SectionProps } from "./components/block/Section/Section";
// import { CardBlock } from "./components/block/Card/CardBlock";
// import { CardProps } from "./components/block/Card/Card";
// import { RowBlock } from "./components/block/Row/RowBlock";
// import { RowProps } from "./components/block/Row/Row";
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
import { ColumnProps } from "./components/block/Column/Column";
import { ColumnBlock } from "./components/block/Column/ColumnBlock";
import { HeadingProps } from "./components/block/Heading/Heading";
import { HeadingBlock } from "./components/block/Heading/HeadingBlock";
import { TextBlock } from "./components/block/Text/TextBlock";
import { TextProps } from "./components/block/Text/Text";
import { FlexBlock } from "./components/block/Flex/FlexBlock";
import { FlexProps } from "./components/block/Flex/Flex";
import { VerticalSpaceProps } from "./components/block/VerticalSpace/VerticalSpace";
import { VerticalSpaceBlock } from "./components/block/VerticalSpace/VerticalSpaceBlock";

interface Components {
  // Section: React.PropsWithChildren<SectionProps>;
  // Card: React.PropsWithChildren<CardProps>;
  // Row: React.PropsWithChildren<RowProps>;
  Column: React.PropsWithChildren<ColumnProps>;
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
  Heading: React.PropsWithChildren<HeadingProps>;
  Text: React.PropsWithChildren<TextProps>;
  Flex: React.PropsWithChildren<FlexProps>;
  VerticalSpace: React.PropsWithChildren<VerticalSpaceProps>;
}

const config: Config<Components> = {
  categories: {
    layout: {
      title: "LAYOUT",
      components: ["Column", "Flex", "VerticalSpace"],
    },
    Typography: {
      title: "TYPOGRAPHY",
      components: ["Heading", "Text"],
    },
    Others: {
      title: "OTHERS",
      components: [
        "HeroComponent",
        "PaymentLogos",
        "AboutUs",
        "PopularProductCard",
        "MenuDetails",
        "OrderType",
        "Review",
        "AppSection",
        "FAQSection",
        "EventSection",
        "CateringCTA",
        "NavigationBar",
        "Footer",
        "ContactInfo",
        "OpeningHours",
        "LocationMap",
      ],
    },
  },

  components: {
    // Section: SectionBlock,
    // Card: CardBlock,
    // Row: RowBlock,
    Column: ColumnBlock,
    NavigationBar: NavigationBarBlock,
    HeroComponent: HeroComponentBlock,
    PaymentLogos: PaymentLogosBlock,
    PopularProductCard: PopularProductCardBlock,
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
    Heading: HeadingBlock,
    Text: TextBlock,
    Flex: FlexBlock,
    VerticalSpace: VerticalSpaceBlock,
  },
};

export default config;
