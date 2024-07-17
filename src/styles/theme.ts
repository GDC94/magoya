import "@emotion/react";
import { COLORS, QUERIES, SIZES, type TypeThemeColors, type TypeThemeQueries, type TypeThemeSizes } from "./themeParts";

export const theme = {
  colors: COLORS,
  size: SIZES,
  queries: QUERIES,
};

type MainTheme = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends MainTheme {
    colors: TypeThemeColors;
    size: TypeThemeSizes;
    queries: TypeThemeQueries;
  }
}
