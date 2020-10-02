import { Appearance } from "react-native-appearance";

const colorScheme = Appearance.getColorScheme();
const colorMode = colorScheme === "dark" ? "dark" : "light";

const lightTheme = {
  name: "light",

  primary: "#6161e8",
  secondary: "#0C8DE4",
  white: "#fff",

  black: "#000000",
  black90: "#333333",
  black80: "#999999",
  black60: "#CCCCCC",
  black40: "#E5E5E5",
  black20: "#F0F0F0",
  black10: "#F7F7F7",

  text01: "#4c4c4c", //		Primary text, Body copy

  error: "#E54937", //	Error
  success: "#07A35A", //	Success
  warning: "#FFA000", //	Warning
  information: "#5aaafa", //	Information

  nav01: "#011627", //	Global top bar
  nav02: "#20232a", //	CTA footer

  tabIconDefault: "#ccc",
  tabIconSelected: "#2f95dc",
  activeTintColor: "#2f95dc",
  inactiveTintColor: "#ccc",
  activeBackgroundColor: "#fff",
  inactiveBackgroundColor: "#fff",
  navBg: "#fff",
  navText: "#000",
};

const darkTheme = {
  name: "dark",

  primary: "#6161e8",
  secondary: "#0C8DE4",
  white: "#000",

  black: "#FFF",
  black90: "#F7F7F7",
  black80: "#F0F0F0",
  black60: "#E5E5E5",
  black40: "#CCCCCC",
  black20: "#999999",
  black10: "#333333",

  text01: "#FFFFFF", //		Primary text, Body copy

  error: "#E54937", //	Error
  success: "#07A35A", //	Success
  warning: "#FFA000", //	Warning
  information: "#5aaafa", //	Information

  nav01: "#000", //	Global top bar
  nav02: "#000", //	CTA footer

  tabIconDefault: "#ccc",
  tabIconSelected: "#2f95dc",
  activeTintColor: "#2f95dc",
  inactiveTintColor: "#CFCFCF",
  activeBackgroundColor: "#000",
  inactiveBackgroundColor: "#000",
  navBg: "#000",
  navText: "#fff",
};

// eslint-disable-next-line import/no-mutable-exports
export let theme = colorMode === "dark" ? darkTheme : lightTheme;

export function setTheme(mode: "dark" | "light" | undefined): void {
  theme = mode === "dark" ? darkTheme : lightTheme;
}

export const antdLightTheme = {
  color_text_base: lightTheme.text01,
  brand_primary: lightTheme.primary,
  color_link: lightTheme.primary,
  primary_button_fill: lightTheme.primary,
  primary_button_fill_tap: lightTheme.primary,
};

export const antdDarkTheme = {
  color_text_base: darkTheme.text01,
  brand_primary: darkTheme.primary,
  color_link: darkTheme.primary,
  primary_button_fill: darkTheme.primary,
  primary_button_fill_tap: darkTheme.primary,
  border_color_base: darkTheme.black20,
};
