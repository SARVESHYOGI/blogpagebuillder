export interface EventSectionProps {
  PrimaryColor: string;
  SecondaryColor: string;
  GapFromTop: number;
  GapFromBottom: number;
  Columns: number;
  CardShape: "square" | "rounded" | "pill";
  ShowDate: boolean;
  MaxItems: number;
  HeadingText: string;
  HeadingSize: "sm" | "md" | "lg" | "xl" | "2xl";
  HeadingWeight: "1" | "2" | "3" | "4" | "5" | "6";
}

const events = [
  {
    date: "Sat, Mar 1 · 7pm",
    title: "Live Jazz Night",
    description: "Enjoy live jazz while savoring our special evening menu.",
  },
  {
    date: "Fri, Mar 7 · 6:30pm",
    title: "Wine Tasting Evening",
    description: "Explore curated wines paired with seasonal appetisers.",
  },
  {
    date: "Sun, Mar 15 · 5pm",
    title: "Chef's Table Experience",
    description: "An intimate 6-course dinner with our executive chef.",
  },
];

export function EventSection(props: EventSectionProps) {
  const borderRadius =
    props.CardShape === "square"
      ? "0px"
      : props.CardShape === "rounded"
        ? "12px"
        : "999px";

  const visibleEvents = events.slice(0, props.MaxItems);

  return (
    <section
      style={{
        marginTop: props.GapFromTop,
        marginBottom: props.GapFromBottom,
      }}
    >
      <h2
        className={`text-${props.HeadingSize} font-${props.HeadingWeight} text-center mb-10`}
        style={{ color: props.PrimaryColor }}
      >
        {props.HeadingText}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${props.Columns}, 1fr)`,
          gap: "24px",
        }}
      >
        {visibleEvents.map((event, index) => (
          <div
            key={index}
            style={{
              borderRadius,
              background: "#f5f5f5",
              overflow: "hidden",
              border: "1px solid #e5e5e5",
            }}
          >
            <div
              style={{
                height: "140px",
                background: "#eee6da",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              📅
            </div>

            <div style={{ padding: "16px", color: props.SecondaryColor }}>
              {props.ShowDate && (
                <p style={{ fontSize: "12px", marginBottom: "6px" }}>
                  {event.date}
                </p>
              )}

              <h3 style={{ fontWeight: 600 }}>{event.title}</h3>

              <p style={{ fontSize: "14px", marginTop: "6px" }}>
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "13px",
          color: "#888",
        }}
      >
        Live events from your events calendar will appear here
      </p>
    </section>
  );
}
