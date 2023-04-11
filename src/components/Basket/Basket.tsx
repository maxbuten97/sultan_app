import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Basket.module.css";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import { IProduct } from "../../shared/interfaces/ProductInterface";
import { IBasketProduct } from "../../shared/interfaces/BasketProductInterface";
import BasketCard from "./BasketCard/BasketCard";

const Basket = (props: {
  storage: IProduct[];
  basketProducts: IBasketProduct[];
  setCountBasketProduct: (count: number, id: string) => void;
  deleteBasketProduct: (id: string) => void;
}) => {
  /**Получить общую сумму корзины */
  function getTotalSumBasket() {
    return props.basketProducts.reduce(
      (sum, current) => current.totalSum + sum,
      0
    );
  }
/**Если продуктов к корзине нет, не переходим на страницу оформления заказа, т.е. блокируем кнопку */
  function isEmptyBasket() {
    if (props.basketProducts.length === 0) {
      return <div className={s.disabledBtn}>Добавьте продукт</div>;
    } else {
      return (
        <NavLink to="/ordering">
          <div className={s.checkout__btn}>Оформить заказ</div>
        </NavLink>
      );
    }
  }
/**Изменение текста загаловка, если корзина пуста показываем "Корзина пуста" */
  function changeTitleBasket() {
    if (props.basketProducts.length === 0) {
      return <div className={s.basket__title}>Корзина пуста</div>;
    } else {
      return <div className={s.basket__title}>Корзина</div>;
    }
  }

  return (
    <div className={s.basket}>
      <div className={s.container}>
        <BreadCrumbs />
        {changeTitleBasket()}
        <div className={s.products__block}>
          <div className={s.products__list}>
            {props.basketProducts.map((basketProduct, index) => {
              let product = basketProduct.product;
              if (product) {
                return (
                  <BasketCard
                    basketProduct={basketProduct}
                    deleteBasketProduct={props.deleteBasketProduct}
                    setCountBasketProduct={props.setCountBasketProduct}
                    key={index}
                  />
                );
              }
            })}
            <div className={s.line}></div>
          </div>
        </div>
        <div className={s.checkout__block}>
          {isEmptyBasket()}
          <div className={s.checkout__sum}>{getTotalSumBasket()} ₸</div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
