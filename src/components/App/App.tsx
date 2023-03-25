import React from "react";
import s from "./App.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import CardProduct from "../CardProduct/CardProduct";
import Catalog from "../Catalog/Catalog";
import Basket from "../Basket/Basket";
import Ordering from "../Ordering/Ordering";

function App() {
  return (
    <div className="App">
      <div className={s.wrapper}>
        <div className={s.content}>
          <Header />
          <Nav />
          <Main />
          {/* <CardProduct /> */}
          {/* <Catalog /> */}
          {/* <Basket /> */}
          {/* <Ordering /> */}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
