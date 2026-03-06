export function ButtonSizeClass(size: "sm" | "md" | "lg") {
  switch (size) {
    case "sm":
      return "px-3 py-1 text-sm";
    case "md":
      return "px-5 py-2 text-base";
    case "lg":
      return "px-7 py-3 text-lg";
    default:
      return "";
  }
}
