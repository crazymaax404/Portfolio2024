// export const theme = {
//   global: {
//     currentTheme: "light" || "dark",
//     light: {
//       body: "#F2F2F2",
//       text: "#EF3E56",
//       toggleBorder: "#FFF",
//       background: "#F2F2F2",
//     },
//     dark: {
//       body: "#333131",
//       text: "#F58A5C",
//       toggleBorder: "#333131",
//       background: "#333131",
//     },
//   },
//   colors: {
//     coral: "#F58A5C",
//     sandy: "#EEA876",
//     vanilla: "#FFEBAE",
//     jet: "#333131",
//     folly: "#EF3E56",
//     white_smoke: "#F2F2F2",
//     anti_flash: "#EEEEEE",
//   },
//   spacings: {
//     small: 4,
//     medium: 8,
//     large: 16,
//     x_large: 24,
//     xx_large: 32,
//     jumbo: 48,
//     mega: 64,
//     giga: 96,
//     tera: 128,
//   },
//   borders: {
//     thin: 4,
//     standard: 6,
//     thick: 8,
//   },
//   typographies: {
//     bai: {
//       regular: {
//         family: "Bai Jamjuree",
//         size: "16px",
//         weight: "regular",
//       },
//       regularBold: {
//         family: "Bai Jamjuree",
//         size: "16px",
//         weight: "bold",
//       },
//       subTitle: {
//         family: "Bai Jamjuree",
//         size: "24px",
//         weight: "regular",
//       },
//       title: {
//         family: "Bai Jamjuree",
//         size: "24px",
//         weight: "bold",
//       },
//       extraLarge: {
//         family: "Bai Jamjuree",
//         size: "32px",
//         weight: "bold",
//       },
//       huge: {
//         family: "Bai Jamjuree",
//         size: "48px",
//         weight: "bold",
//       },
//     },
//     ubuntu: {
//       regular: {
//         family: "Ubuntu",
//         size: "16px",
//         weight: "regular",
//       },
//       regularBold: {
//         family: "Ubuntu",
//         size: "16px",
//         weight: "bold",
//       },
//       subTitle: {
//         family: "Ubuntu",
//         size: "24px",
//         weight: "regular",
//       },
//       title: {
//         family: "Ubuntu",
//         size: "24px",
//         weight: "bold",
//       },
//       extraLarge: {
//         family: "Ubuntu",
//         size: "32px",
//         weight: "bold",
//       },
//       huge: {
//         family: "Ubuntu",
//         size: "48px",
//         weight: "bold",
//       },
//     },
//   },
// };

import { borders } from "./borders.theme";
import { colors } from "./colors.theme";
import { spacings } from "./spacings.theme";
import { ThemesTypes } from "./theme.interfaces";
import { typographies } from "./typographies.theme";

export const theme = {
  borders,
  colors,
  spacings,
  typographies,
};

export const lightTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: theme.colors.anti_flash,
    text: theme.colors.jet,
    primary: theme.colors.coral,
  },
  title: "light" as ThemesTypes,
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: theme.colors.jet,
    text: theme.colors.anti_flash,
    primary: theme.colors.coral,
  },
  title: "dark" as ThemesTypes,
};
