interface HeadingProps {
  children: React.ReactNode;
  size?: number;
  align?: React.CSSProperties["textAlign"];
}

export const Heading = ({
  children,
  size = 40,
  align = "left",
}: HeadingProps) => {
  return <h1 style={{ fontSize: size, textAlign: align }}>{children}</h1>;
};
