import React from "react";
import s from "./BasketHeader.module.css";
import { IBasketProduct } from "../../../shared/interfaces/BasketProductInterface";
const basketSVG: string = require("../../../image/basket.svg").default;

const BasketHeader = (props: { basketProducts: IBasketProduct[] }) => {
  function getCountBasket() {
    if (props.basketProducts.length === 0) {
      return;
    }
    const totalCount = props.basketProducts.reduce(
      (sum, b) => sum + b.count,
      0
    );
    return <span className={s.basket__number} data-testid='countBasketTest'>{totalCount}</span>;
  }
  function getTotalSumBasket() {
    return props.basketProducts.reduce(
      (sum, current) => current.totalSum + sum,
      0
    );
  }

  return (
    <div className={s.basket}>
      <div className={s.basket__imgWrapper} >
        <img className={s.basket__img} src={basketSVG} alt="basket" />
        <span>{getCountBasket()}</span>
      </div>
      <div className={s.basket__text}>
        Корзина <br />
        <span className={s.sum} data-testid='sumBasketTest'>{getTotalSumBasket()} ₸</span>
      </div>
    </div>
  );
};

export default BasketHeader;
