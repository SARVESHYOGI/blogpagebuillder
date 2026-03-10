import { cx } from "class-variance-authority";

export interface LocationMapProps {
  GapFromTop: number;
  GapFromBottom: number;
  GoogleMapsEmbedUrl: string;
  MapHeight: "300" | "400" | "500";
  BorderRadius: "small" | "medium" | "large";
}

export function LocationMap(props: LocationMapProps) {
  const heightClass = {
    "300": "h-[300px]",
    "400": "h-[400px]",
    "500": "h-[500px]",
  };

  const borderRadiusClass = {
    small: "rounded-xl",
    medium: "rounded-3xl",
    large: "rounded-4xl",
  };

  return (
    <div
      style={{
        marginTop: props.GapFromTop,
        marginBottom: props.GapFromBottom,
      }}
      className={cx(
        "overflow-hidden w-full p-2",
        heightClass[props.MapHeight],
        borderRadiusClass[props.BorderRadius],
      )}
    >
      <iframe
        src={props.GoogleMapsEmbedUrl}
        className={cx(
          "overflow-hidden p-2 w-full h-full border-0",
          heightClass[props.MapHeight],
          borderRadiusClass[props.BorderRadius],
        )}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
