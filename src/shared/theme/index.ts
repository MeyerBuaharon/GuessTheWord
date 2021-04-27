import colors from "./colors";
import typography from "./typography";

export type Colors = typeof colors;
type Typography = typeof typography;

export interface ITheme {
	colors: Colors;
	typography: Typography;
}

const theme: ITheme = {
	colors,
	typography,
};

export type MyTheme = typeof theme;

export default theme;