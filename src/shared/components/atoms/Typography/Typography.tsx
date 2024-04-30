import { type TypographyProps } from "./typography.interfaces";
import { Paragraph } from "./typography.styles";

export const Typography = ({
  variant = "baiRegular",
  children,
  maxLines,
  isPreLine,
  color,
  ...rest
}: TypographyProps) => {
  return (
    <Paragraph
      variant={variant}
      maxLines={maxLines}
      isPreLine={isPreLine}
      color={color}
      {...rest}
    >
      {children}
    </Paragraph>
  );
};
