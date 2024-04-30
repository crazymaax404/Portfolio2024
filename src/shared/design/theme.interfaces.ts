export interface IBorders {
  thin: number;
  standard: number;
  thick: number;
}

export interface IColors {
  coral: string;
  sandy: string;
  vanilla: string;
  jet: string;
  folly: string;
  white_smoke: string;
  anti_flash: string;
  background: string;
  text: string;
  primary: string;
  secondary: string;
}

export interface ISpacings {
  small: number;
  medium: number;
  large: number;
  x_large: number;
  xx_large: number;
  jumbo: number;
  mega: number;
  giga: number;
  tera: number;
}

export interface ITypographies {
  bai: TypographiesCategories;
  ubuntu: TypographiesCategories;
}

export type ThemesTypes = "light" | "dark";
export interface ITheme {
  borders: IBorders;
  colors: IColors;
  spacings: ISpacings;
  typographies: ITypographies;
  title: ThemesTypes;
}

export type UbuntuTypographiesType =
  | "ubuntuRegular"
  | "ubuntuRegularBold"
  | "ubuntuTitle"
  | "ubuntuSubTitle"
  | "ubuntuExtraLarge"
  | "ubuntuHuge";

export type BaiTypographiesType =
  | "baiRegular"
  | "baiRegularBold"
  | "baiTitle"
  | "baiSubTitle"
  | "baiExtraLarge"
  | "baiHuge";

export type TypographiesCategories = {
  regular: TypographiesStyle;
  regularBold: TypographiesStyle;
  subTitle: TypographiesStyle;
  title: TypographiesStyle;
  extraLarge: TypographiesStyle;
  huge: TypographiesStyle;
};

export type TypographiesStyle = {
  family: string;
  size: string;
  weight: string;
};
