import React, { useState } from "react";
import s from "./ProductItem.module.css";
import { NavLink } from "react-router-dom";
import { IProduct } from "../../../shared/interfaces/ProductInterface";
import { IBasketProduct } from "../../../shared/interfaces/BasketProductInterface";

const bottleSVG: string = require("../../../image/bottle.svg").default;

const ProductItem = (props: {
  item: IProduct;
  deleteProduct: (listProducts: IProduct) => void;
  isAdmin: boolean;
  addBasketProduct: (id: string) => void;
  basketProducts: IBasketProduct[];
  setCountBasketProduct: (count: number, id: string) => void;
}) => {
  const item = props.item;
  const basketProduct = props.basketProducts.find(
    (x) => x.product?.id === item.id
  );
  let [counter, setCounter] = useState<number>(() => {
    if (basketProduct) {
      return basketProduct.count;
    }
    return 1;
  });

  function getAdminTools() {
    if (props.isAdmin) {
      return (
        <button className={s.delete} onClick={() => props.deleteProduct(item)}>
          ❌
        </button>
      );
    } else {
      return;
    }
  }

  function removeFromBasketCounter() {
    if (counter === 1) {
      props.setCountBasketProduct(-1, item.id);
      return;
    }
    if (counter > 1) {
      setCounter(counter - 1);
      props.setCountBasketProduct(-1, item.id);
    }
  }

  function addToBasketCounter() {
    if (counter === 0) {
      setCounter(1);
    }
    if (basketProduct) {
      setCounter(basketProduct?.count + 1);
    }
    props.setCountBasketProduct(1, item.id);
  }

  function getAddToBasket() {
    const findedProductBasket = props.basketProducts.find(
      (basketProduct) => basketProduct.product?.id === item.id
    );
    if (findedProductBasket) {
      return (
        <div className={s.quantity}>
          <button
            onClick={() => removeFromBasketCounter()}
            className={s.down_btn}
          >
            -
          </button>
          <div className={s.number}>{counter}</div>
          <button onClick={() => addToBasketCounter()} className={s.up_btn}>
            +
          </button>
        </div>
      );
    }
    return (
      <div
        className={s.product__btn}
        onClick={() => props.addBasketProduct(item.id)}
      >
        В корзину
      </div>
    );
  }

  return (
    <div>
      <div className={s.list__item}>
        {getAdminTools()}
        <div className={s.imgWrapper_product}>
          <img className={s.product__image} src={item.url} alt="product" />
        </div>
        <div className={s.product__info}>
          <div className={s.product__size}>
            <div className={s.imgWrapper_bottle}>
              <img className={s.size__image} src={bottleSVG} alt="product" />
            </div>
            <div className={s.size__text}>
              {item.size} {item.typeSize}
            </div>
          </div>
          {/* Когда перейдём на отоборажение массива сделать переход по айдишнику */}
          <NavLink to={`/card-product/${item.id}`}>
            <div className={s.product__name}>
              <span className={s.strong}>{item.brand}</span> {item.name}
            </div>
          </NavLink>
          <div className={s.product__characteristics}>
            <div className={s.product__barcode}>
              <span className={s.gray}>Штрихкод:</span> {item.barcode}
            </div>
            <div className={s.product__manufacturer}>
              <span className={s.gray}>Производитель:</span> {item.manufacture}
            </div>
            <div className={s.product__brand}>
              <span className={s.gray}>Бренд:</span> {item.brand}
            </div>
          </div>
          <div className={s.product__price_block}>
            <div className={s.product__price}>{item.price} ₸</div>
            {getAddToBasket()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
