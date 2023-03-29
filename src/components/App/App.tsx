import React, { useState } from "react";
import s from "./App.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import data from "../../data.json";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import CardProduct from "../CardProduct/CardProduct";
import Catalog from "../Catalog/Catalog";
import Basket from "../Basket/Basket";
import Ordering from "../Ordering/Ordering";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IProduct } from "../../shared/interfaces/ProductInterface";
import { ICareCategory } from "../../shared/interfaces/CareCategoryInterface";
/**Ключ для полного списка продуктов в LocalStorage */
export const STORAGE_KEY = "storage";

function App() {
  let [careCategories] = useState<ICareCategory[]>(data.careCategories);
  /** Работа с localStorage */
  let defaultProductsList: IProduct[] = data.productsList;

  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  /** Работа с массивом продуктов из localStorage/JSON */
  const [storage, setStorage] = useState<IProduct[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const initialValue = JSON.parse(saved);
      return initialValue;
    }
    return defaultProductsList;
  });
  const [basketProduct, setBasketProduct] = useState<IProduct[]>([]);
  /**   */
  function deleteProduct(product: IProduct): void {
    const newProductList = storage.filter((item) => item.id !== product.id);
    saveListProducts(newProductList);
  }
  /**Редактировать продукт */
  function editProduct(product: IProduct) {
    const newProductList = storage.map((item) => {
      if (item.id === product.id) {
        item = product;
      }
      return item;
    });
    saveListProducts(newProductList);
  }

  /** Сохранение списка продуктов в LocalStorage*/
  function saveListProducts(listProducts: IProduct[]): void {
    if (listProducts.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(listProducts));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
    setStorage(listProducts);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <div className={s.wrapper}>
          <div className={s.content}>
            <Header />
            <Nav />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/card-product/:id"
                element={
                  <CardProduct
                    storage={storage}
                    isAdmin={isAdmin}
                    editProduct={editProduct}
                  />
                }
              />
              <Route
                path="/catalog"
                element={
                  <Catalog
                    storage={storage}
                    careCategories={careCategories}
                    deleteProduct={deleteProduct}
                    isAdmin={isAdmin}
                    setIsAdmin={setIsAdmin}
                  />
                }
              />
              <Route
                path="/basket"
                element={
                  <Basket
                    storage={storage}
                    basketProduct={basketProduct}
                    setBasketProduct={setBasketProduct}
                  />
                }
              />
              <Route path="/ordering" element={<Ordering />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
