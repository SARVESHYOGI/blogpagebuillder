export function BorderWidthClass(border: "1" | "2" | "3" | "4" | "5") {
  switch (border) {
    case "1":
      return "border";
    case "2":
      return "border-2";
    case "3":
      return "border-4";
    case "4":
      return "border-4";
    case "5":
      return "border-8";
    default:
      return "";
  }
}
