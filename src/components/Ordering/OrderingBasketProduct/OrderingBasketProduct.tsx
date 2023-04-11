import React from "react";
import s from "./OrderingBasketProduct.module.css";
import { IBasketProduct } from "../../../shared/interfaces/BasketProductInterface";
const bottleSVG: string = require("../../../image/bottle.svg").default;

const OrderingBasketProduct = (props: { basketProduct: IBasketProduct }) => {
  return (
    <div>
      <div className={s.order__item}>
        <div className={s.img_wrapper}>
          <img
            className={s.product__image}
            src={props.basketProduct.product?.url}
            alt="product"
          />
        </div>
        <div className={s.order__content}>
          <div className={s.order__volume}>
            <img className={s.bottle__image} src={bottleSVG} alt="bottle" />
            <div className={s.volume__text} data-testid="sizeText">
              {props.basketProduct.product?.size}{" "}
              {props.basketProduct.product?.typeSize}
            </div>
          </div>
          <div className={s.product__name} data-testid='nameTest'>
            {props.basketProduct.product?.brand}{" "}
            {props.basketProduct.product?.name}
          </div>
          <div className={s.product__price}>
            <div className={s.count} data-testid='countTest'>
              Количество: {props.basketProduct.count}
            </div>
            <span className={s.strong} data-testid='priceTest'>
              {props.basketProduct.product?.price} ₸
            </span>
          </div>
        </div>
      </div>
      <div className={s.line}></div>
    </div>
  );
};

export default OrderingBasketProduct;
