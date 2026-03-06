import { ComponentConfig } from "@puckeditor/core";
import { LocationMap, LocationMapProps } from "./LocationMap";
import React from "react";

export const LocationMapBlock: ComponentConfig<
  React.PropsWithChildren<LocationMapProps>
> = {
  fields: {
    GoogleMapsEmbedUrl: { type: "text" },

    GapFromTop: { type: "number" },
    GapFromBottom: { type: "number" },

    MapHeight: {
      type: "select",
      options: [
        { label: "300px", value: "300" },
        { label: "400px", value: "400" },
        { label: "500px", value: "500" },
      ],
    },

    BorderRadius: {
      type: "select",
      options: [
        { label: "Small", value: "small" },
        { label: "Medium", value: "medium" },
        { label: "Large", value: "large" },
      ],
    },
  },

  defaultProps: {
    GoogleMapsEmbedUrl:
      "https://www.google.com/maps?q=19.0760,72.8777&z=15&output=embed",

    GapFromTop: 0,
    GapFromBottom: 0,

    MapHeight: "400",
    BorderRadius: "medium",
  },

  render(props) {
    return <LocationMap {...props} />;
  },
};
