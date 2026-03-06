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
    small: "rounded-sm",
    medium: "rounded-md",
    large: "rounded-lg",
  };

  return (
    <div
      style={{
        marginTop: props.GapFromTop,
        marginBottom: props.GapFromBottom,
      }}
      className={cx(
        "overflow-hidden w-full",
        heightClass[props.MapHeight],
        borderRadiusClass[props.BorderRadius],
      )}
    >
      <iframe
        src={props.GoogleMapsEmbedUrl}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
