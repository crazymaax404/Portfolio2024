import {} from "styled-components";
import { ITheme } from "./theme.interfaces";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
