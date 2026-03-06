export function TextSizeToClass(size: "sm" | "md" | "lg" | "xl" | "2xl") {
  switch (size) {
    case "sm":
      return "text-sm";
    case "md":
      return "text-base";
    case "lg":
      return "text-lg";
    case "xl":
      return "text-xl";
    case "2xl":
      return "text-2xl";
    default:
      return "";
  }
}
