export interface OpeningHoursProps {
  PrimaryColor: string;
  SecondaryColor: string;
  GapFromTop: number;
  GapFromBottom: number;
  DisplaySize: "Table" | "List";
  ShowClosedDays: boolean;
  HeadingText: string;
  HeadingSize: "sm" | "md" | "lg" | "xl" | "2xl";
  HeadingWeight: "1" | "2" | "3" | "4" | "5" | "6";
}
const openingHoursData = [
  { day: "MONDAY", time: "10:00-23:59" },
  { day: "TUESDAY", time: "00:00-23:59" },
  { day: "WEDNESDAY", time: "09:00-23:00" },
  { day: "THURSDAY", time: "00:00-23:59" },
  { day: "FRIDAY", time: "09:00-15:00" },
  { day: "SATURDAY", time: "05:00-23:59" },
  { day: "SUNDAY", time: "05:00-06:00" },
];
export function OpeningHours(props: OpeningHoursProps) {
  return (
    <section
      style={{
        marginTop: props.GapFromTop,
        marginBottom: props.GapFromBottom,
      }}
    >
      <h2
        style={{
          color: props.PrimaryColor,
          fontWeight: props.HeadingWeight,
        }}
        className={`text-${props.HeadingSize} text-center mb-6`}
      >
        {props.HeadingText}
      </h2>

      <div className="max-w-xl mx-auto">
        {openingHoursData.map((item) => (
          <div
            key={item.day}
            className="flex justify-between border-b py-3"
            style={{ color: props.SecondaryColor }}
          >
            <span>{item.day}</span>
            <span>{item.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
