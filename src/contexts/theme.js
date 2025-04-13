export const colors = {
  accent: "#00bcd4",
  accentGradientStart: "#00acc1",
  accentGradientEnd: "#00bcd4",
  border: "#00acc1",
  borderHover: "rgba(0, 172, 193, 0.4)",
  shadow: "rgba(0, 0, 0, 0.2)",
};

export const darkTheme = {
  name: "dark",
  colors: {
    ...colors,
    background: "#121212",
    backgroundAlt: "#1d1d1d",
    text: "#e0e0e0",
    textMuted: "#b0b0b0",
    textDimmed: "#8a8a8a",
    glowLight: "rgba(0, 188, 212, 0.2)",
    glowStrong: "rgba(0, 188, 212, 0.4)",
  },
};

export const lightTheme = {
  name: "light",
  colors: {
    ...colors,
    background: "#ffffff",
    backgroundAlt: "#f1f1f1",
    text: "#212121",
    textMuted: "#757575",
    textDimmed: "#9e9e9e",
    glowLight: "rgba(0, 188, 212, 0.1)",
    glowStrong: "rgba(0, 188, 212, 0.2)",
  },
};