export function ButtonShapeClass(shape: boolean, rounded: "sm" | "md" | "lg") {
  if (!shape) return "rounded-none";
  switch (rounded) {
    case "sm":
      return "rounded-sm";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
    default:
      return "";
  }
}
