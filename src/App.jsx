import { useState } from "react";
import "./App.css";
import "../src/assets/styles/reset.css";
import "../src/assets/styles/variables.css";
import MenuList from "./Components/MenuList/MenuList";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

function App() {
  const [cartContent, setCartContent] = useState([]);

  return (
    <>
      <section className="listWrapper">
        <MenuList
          cartContent={cartContent}
          setCartContent={setCartContent}
        ></MenuList>
      </section>

      <ShoppingCart></ShoppingCart>
    </>
  );
}

export default App;
