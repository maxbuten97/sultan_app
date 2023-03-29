import React from "react";
import s from "./ProductItem.module.css";
import { NavLink } from "react-router-dom";
import { IProduct } from "../../../shared/interfaces/ProductInterface";

const bottleSVG: string = require("../../../image/bottle.svg").default;

const ProductItem = (props: {
  item: IProduct;
  deleteProduct: (listProducts: IProduct) => void;
  isAdmin: boolean;
}) => {
  const item = props.item;

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
            <div className={s.product__btn}>В корзину</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
