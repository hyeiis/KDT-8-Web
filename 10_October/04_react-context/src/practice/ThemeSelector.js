import { useContext } from "react";
import ThemeContext from "../store/theme-context";
import "./scss/Theme.scss";

export default function ThemeSelector() {
  const value = useContext(ThemeContext);

  return (
    <div className={value.theme}>
      <h2>현재 선택된 테마: {value.theme}</h2>
      <select
        className={value.theme}
        value={value.theme}
        onChange={(e) => value.setTheme(e.target.value)}>
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
      </select>
    </div>
  );
}
