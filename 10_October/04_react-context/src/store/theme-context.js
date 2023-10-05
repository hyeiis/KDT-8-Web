import { createContext, useState } from "react";

const ThemeContext = createContext({
  theme: "",
});

export function ThemeProvider(props) {
  const [theme, setTheme] = useState("Light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
