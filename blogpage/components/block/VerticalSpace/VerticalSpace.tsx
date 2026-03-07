export interface VerticalSpaceProps {
  size?: string;
}

export function VerticalSpace({ size = "24px" }: VerticalSpaceProps) {
  return <div style={{ height: size }} />;
}
