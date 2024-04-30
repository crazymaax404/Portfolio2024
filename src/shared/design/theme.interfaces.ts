export interface IBorders {
  thin_4: number;
  standard_6: number;
  thick_8: number;
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
  small_4: string;
  medium_8: string;
  large_16: string;
  x_large_24: string;
  xx_large_32: string;
  jumbo_48: string;
  mega_64: string;
  giga_96: string;
  tera_128: string;
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
