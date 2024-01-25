import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

type ThemeProp = {
  children: JSX.Element;
};

export enum themePallete {
  BG = "#12181b",
  LIME = "#C8FA5F",
  FONT_GLOBAL = "'JetBrains Mono', monospace",
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: themePallete.BG,
    },
    primary: {
      main: themePallete.LIME,
    },
  },
  typography: {
    fontFamily: themePallete.FONT_GLOBAL,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0.5rem",
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};