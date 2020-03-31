import React from "react";

export interface Theme {
  background: string;
  color: string;
}

const theme: Theme = {
  background: "#ffffff",
  color: "#000000"
};

export const ThemeContext = React.createContext({
  theme,
  setTheme: (theme: Theme) => {}
});
