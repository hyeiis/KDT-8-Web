import logo from "./logo.svg";
import "./App.css";
import LanguageProvider from "./LanguageProvider";
import LanguageSelector from "./LanguageSelector";
// lang-context에 Provider 넣어놓고 불러와서 사용해도 됨 (많이 사용)
// import { LanguageProvider } from "./store/lang-context";
//* 실습
import { ThemeProvider } from "./store/theme-context";
import ThemeSelector from "./practice/ThemeSelector";
import ProductList from "./practice/ProductList";
import { CartContextProvider } from "./store/cart-context";
import Cart from "./practice/Cart";

function App() {
  return (
    <>
      {/* <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider> */}

      {/* 실습 */}
      {/* <ThemeProvider>
        <LanguageSelector />
        <ThemeSelector />
      </ThemeProvider> */}

      <CartContextProvider>
        <ProductList />
        <Cart />
      </CartContextProvider>
    </>
  );
}

export default App;
