export const colors = {
  accent: "#2CC3C2",
  accentGradientStart: "#81eae8",
  accentGradientEnd: "#2CC3C2",
  border: "#81eae8",
  borderHover: "#26c6db",
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
    glowLight: "#c6f2f0",
    glowStrong: "#26c6db",
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
    glowLight: "#c6f2f0",
    glowStrong: "#26c6db",
  },
};