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
  const headingSizeMap = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
    "2xl": "text-3xl",
  };

  const weightMap = {
    "1": "font-thin",
    "2": "font-light",
    "3": "font-normal",
    "4": "font-medium",
    "5": "font-semibold",
    "6": "font-bold",
  };

  const filteredHours = props.ShowClosedDays
    ? openingHoursData
    : openingHoursData.filter((d) => d.time !== "Closed");

  return (
    <section
      style={{
        marginTop: props.GapFromTop,
        marginBottom: props.GapFromBottom,
      }}
    >
      <h2
        style={{ color: props.PrimaryColor }}
        className={`${headingSizeMap[props.HeadingSize]} ${
          weightMap[props.HeadingWeight]
        } text-center mb-6`}
      >
        {props.HeadingText}
      </h2>

      <div className="max-w-xl mx-auto">
        {props.DisplaySize === "Table" ? (
          <table className="w-full">
            <tbody>
              {filteredHours.map((item) => (
                <tr
                  key={item.day}
                  className="border-b"
                  style={{ color: props.SecondaryColor }}
                >
                  <td className="py-3">{item.day}</td>
                  <td className="py-3 text-right">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          filteredHours.map((item) => (
            <div
              key={item.day}
              className="flex justify-between border-b py-3"
              style={{ color: props.SecondaryColor }}
            >
              <span>{item.day}</span>
              <span>{item.time}</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
