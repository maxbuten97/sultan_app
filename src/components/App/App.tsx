import React, { useState } from "react";
import s from "./App.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import data from "../../data.json";
import Main from "../Main/Main";
import CardProduct from "../CardProduct/CardProduct";
import Catalog from "../Catalog/Catalog";
import Basket from "../Basket/Basket";
import Ordering from "../Ordering/Ordering";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IProduct } from "../../shared/interfaces/ProductInterface";
import { ICareCategory } from "../../shared/interfaces/CareCategoryInterface";
import { IBasketProduct } from "../../shared/interfaces/BasketProductInterface";

/**Ключ для полного списка продуктов в LocalStorage */
export const STORAGE_KEY = "storage";

/**Ключ для корзины в LocalStorage*/
export const BASKET_KEY = "basket";

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
  /**Работа с массивом продуктов в корзине из localStorage/JSON */
  let [basketProducts, setBasketProducts] = useState<IBasketProduct[]>(() => {
    const savedBasket = localStorage.getItem(BASKET_KEY);
    if (savedBasket) {
      const initialValue = JSON.parse(savedBasket);
      return initialValue;
    }
    return [];
  });
  /**Добавить продукт в корзину */
  function addBasketProduct(id: string): void {
    /**Защита от возможного дублирования добавления в корзину */
    const findedProductBasket = basketProducts.find(
      (productBasket) => productBasket.product?.id === id
    );

    if (findedProductBasket) {
      return;
    }

    const findedProduct = storage.find((product) => product.id === id);

    if (findedProduct) {
      const newBasketProduct: IBasketProduct = {
        count: 1,
        product: findedProduct,
        totalSum: findedProduct.price,
      };
      basketProducts.push(newBasketProduct);
      setBasketProducts([...basketProducts]);
      saveBasket();
    }
  }

  /**Сохранение корзины в Local Storage */
  function saveBasket(): void {
    const basketProductCountFilter = basketProducts.filter(
      (basketProduct) => basketProduct.count > 0
    );
    if (basketProductCountFilter.length > 0) {
      localStorage.setItem(
        BASKET_KEY,
        JSON.stringify(basketProductCountFilter)
      );
    } else {
      localStorage.removeItem(BASKET_KEY);
    }
  }

  function clearBasket() {
    setBasketProducts([]);
    saveBasket();
  }

  //** Назначить количество товаров в корзине */
  function setCountBasketProduct(count: number, id: string) {
    let a = [...basketProducts];
    const newProductBaskets = a.map((basketProduct) => {
      const product = basketProduct.product;
      if (product && product.id === id) {
        basketProduct.count += count;
        basketProduct.totalSum = basketProduct.count * product.price;
      }
      return basketProduct;
    });
    setBasketProducts(
      newProductBaskets.filter((basketProduct) => basketProduct.count > 0)
    );
    saveBasket();
  }

  //** Удаление продукта в корзине */
  function deleteBasketProduct(id: string): void {
    let a = [...basketProducts];
    const newBasketProducts = a.map((item) => {
      if (item.product.id === id) {
        item.count = 0;
      }
      return item;
    });
    setBasketProducts(
      newBasketProducts.filter((basketProduct) => basketProduct.count > 0)
    );
    saveBasket();
  }
  /**  Удалить продукт  */
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
            <Header basketProducts={basketProducts} />
            <Routes>
              <Route path="/sultan_app" element={<Main />} />
              <Route
                path="/card-product/:id"
                element={
                  <CardProduct
                    storage={storage}
                    isAdmin={isAdmin}
                    editProduct={editProduct}
                    basketProducts={basketProducts}
                    addBasketProduct={addBasketProduct}
                    setCountBasketProduct={setCountBasketProduct}
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
                    basketProducts={basketProducts}
                    addBasketProduct={addBasketProduct}
                    setCountBasketProduct={setCountBasketProduct}
                  />
                }
              />
              <Route
                path="/basket"
                element={
                  <Basket
                    storage={storage}
                    basketProducts={basketProducts}
                    setCountBasketProduct={setCountBasketProduct}
                    deleteBasketProduct={deleteBasketProduct}
                  />
                }
              />
              <Route
                path="/ordering"
                element={
                  <Ordering
                    basketProducts={basketProducts}
                    clearBasket={clearBasket}
                  />
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
