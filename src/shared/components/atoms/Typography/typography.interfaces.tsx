import { type ReactNode, type TextareaHTMLAttributes } from "react";
import {
  BaiTypographiesType,
  UbuntuTypographiesType,
} from "shared/design/theme.interfaces";

export type TypographyVariants = UbuntuTypographiesType | BaiTypographiesType;

export interface TypographyProps
  extends TextareaHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode | string | number;
  variant?: TypographyVariants;
  maxLines?: number;
  className?: string;
  isPreLine?: boolean;
  color?: string;
}
