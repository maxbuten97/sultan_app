import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Basket.module.css";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import { IProduct } from "../../shared/interfaces/ProductInterface";

const basketDeleteSVG: string =
  require("../../image/basket_delete.svg").default;
const bottleSVG: string = require("../../image/bottle.svg").default;

const Basket = (props: {
  storage: IProduct[];
  basketProduct: IProduct[];
  setBasketProduct: (product: []) => void;
}) => {
  return (
    <div className={s.basket}>
      <div className={s.container}>
        <BreadCrumbs />
        <div className={s.basket__title}>Корзина</div>
        <div className={s.products__block}>
          <div className={s.products__list}>
            {props.storage.map((product) => {
              return (
                <div>
                  <div className={s.line}></div>
                  <div className={s.product__item}>
                    <div className={s.product__row}>
                      <div className={s.product__image}>
                        <img
                          className={s.product_img}
                          src={product.url}
                          alt="product"
                        />
                      </div>
                      <div className={s.product__body}>
                        <div className={s.volume__block}>
                          <img
                            className={s.bottle}
                            src={bottleSVG}
                            alt="bottle"
                          />
                          <div className={s.volume}>
                            {product.size}
                            {product.typeSize}
                          </div>
                        </div>
                        <div className={s.product__name}>
                          {product.brand} {product.name}
                        </div>
                        <div className={s.product__info}>
                          {product.description}
                        </div>
                      </div>
                      <div className={s.line__small}></div>
                      <div className={s.quantity}>
                        <div className={s.down_btn}>-</div>
                        <div className={s.number}>1</div>
                        <div className={s.up_btn}>+</div>
                      </div>
                      <div className={s.line__small}></div>
                      <div className={s.price}>{product.price} ₸</div>
                      <div className={s.line__small}></div>
                      <div className={s.basket__delete}>
                        <img
                          className={s.delete__img}
                          src={basketDeleteSVG}
                          alt="basket_delete"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className={s.line}></div>
          </div>
        </div>
        <div className={s.checkout__block}>
          <NavLink to="/ordering">
            <div className={s.checkout__btn}>Оформить заказ</div>
          </NavLink>
          <div className={s.checkout__sum}>1 348,76 ₸</div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
