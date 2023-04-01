import React, { useState } from "react";
import s from "./BasketCard.module.css";
import { IBasketProduct } from "../../../shared/interfaces/BasketProductInterface";
import { NavLink } from "react-router-dom";
const basketDeleteSVG: string =
  require("../../../image/basket_delete.svg").default;
const bottleSVG: string = require("../../../image/bottle.svg").default;
const BasketCard = (props: {
  basketProduct: IBasketProduct;
  deleteBasketProduct: (id: string) => void;
  setCountBasketProduct: (count: number, id: string) => void;
}) => {
  const product = props.basketProduct.product;

  let [counter, setCounter] = useState<number>(() => {
    if (props.basketProduct) {
      return props.basketProduct.count;
    }
    return 1;
  });

  function removeFromBasketCounter() {
    if (counter === 1) {
      return;
    }
    if (counter > 1) {
      setCounter(counter - 1);
      props.setCountBasketProduct(-1, product.id);
    }
  }

  function addToBasketCounter() {
    if (counter === 0) {
      setCounter(1);
    }
    if (props.basketProduct) {
      setCounter(props.basketProduct.count + 1);
    }
    props.setCountBasketProduct(1, product.id);
  }

  return (
    <div>
      <div className={s.line}></div>
      <div className={s.product__item}>
        <div className={s.product__row}>
          <div className={s.product__image}>
            <img className={s.product_img} src={product.url} alt="product" />
          </div>
          <div className={s.product__body}>
            <div className={s.volume__block}>
              <img className={s.bottle} src={bottleSVG} alt="bottle" />
              <div className={s.volume}>
                {product.size}
                {product.typeSize}
              </div>
            </div>
            <NavLink to={`/card-product/${product?.id}`}>
              <div className={s.product__name}>
                {product.brand} {product.name}
              </div>
            </NavLink>

            <div className={s.product__info}>{product.description}</div>
          </div>
          <div className={s.price__block}>
            <div className={s.line__small}></div>
            <div className={s.quantity}>
              <div
                className={s.down_btn}
                onClick={() => removeFromBasketCounter()}
              >
                -
              </div>
              <div className={s.number}>{counter}</div>
              <div className={s.up_btn} onClick={() => addToBasketCounter()}>
                +
              </div>
            </div>
            <div className={s.line__small}></div>
            <div className={s.price}>{product.price} ₸</div>
            <div className={s.line__small}></div>
            <div
              className={s.basket__delete}
              onClick={() => props.deleteBasketProduct(product.id)}
            >
              <img
                className={s.delete__img}
                src={basketDeleteSVG}
                alt="basket_delete"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
