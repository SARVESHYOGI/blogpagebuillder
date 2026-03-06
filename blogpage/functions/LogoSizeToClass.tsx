export function LogoSizeToClass(size: "sm" | "md" | "lg") {
  switch (size) {
    case "sm":
      return "h-8 w-auto";
    case "md":
      return "h-12 w-auto";
    case "lg":
      return "h-20 w-auto";
    default:
      return "";
  }
}
