import React from "react";
import s from "./Basket.module.css";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import productPNG from "../../image/aos.png";
const basketDeleteSVG: string =
  require("../../image/basket_delete.svg").default;
const bottleSVG: string = require("../../image/bottle.svg").default;

const Basket = () => {
  return (
    <div className={s.basket}>
      <div className={s.container}>
        <BreadCrumbs />
        <div className={s.basket__title}>Корзина</div>
        <div className={s.products__block}>
          <div className={s.products__list}>
            <div className={s.line}></div>
            <div className={s.product__item}>
              <div className={s.product__row}>
                <div className={s.product__image}>
                  <img src={productPNG} alt="" />
                </div>
                <div className={s.product__body}>
                  <div className={s.volume__block}>
                    <img src={bottleSVG} alt="bottle" />
                    <div className={s.volume}>450мл</div>
                  </div>
                  <div className={s.product__name}>
                    AOS средство для мытья посуды Crystal
                  </div>
                  <div className={s.product__info}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam interdum ut justo, vestibulum sagittis iaculis
                    iaculis. Quis mattis vulputate feugiat massa vestibulum
                    duis.{" "}
                  </div>
                </div>
                <div className={s.line__small}></div>
                <div className={s.quantity}>
                  <div className={s.down_btn}>-</div>
                  <div className={s.number}>1</div>
                  <div className={s.up_btn}>+</div>
                </div>
                <div className={s.line__small}></div>
                <div className={s.price}>48,76 ₸</div>
                <div className={s.line__small}></div>
                <div className={s.basket__delete}>
                  <img src={basketDeleteSVG} alt="basket_delete" />
                </div>
              </div>
            </div>
            {/* 2 карточки */}
            <div className={s.line}></div>
            <div className={s.product__item}>
              <div className={s.product__row}>
                <div className={s.product__image}>
                  <img src={productPNG} alt="" />
                </div>
                <div className={s.product__body}>
                  <div className={s.volume__block}>
                    <img src={bottleSVG} alt="bottle" />
                    <div className={s.volume}>450мл</div>
                  </div>
                  <div className={s.product__name}>
                    AOS средство для мытья посуды Crystal
                  </div>
                  <div className={s.product__info}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam interdum ut justo, vestibulum sagittis iaculis
                    iaculis. Quis mattis vulputate feugiat massa vestibulum
                    duis.{" "}
                  </div>
                </div>
                <div className={s.line__small}></div>
                <div className={s.quantity}>
                  <div className={s.down_btn}>-</div>
                  <div className={s.number}>1</div>
                  <div className={s.up_btn}>+</div>
                </div>
                <div className={s.line__small}></div>
                <div className={s.price}>48,76 ₸</div>
                <div className={s.line__small}></div>
                <div className={s.basket__delete}>
                  <img src={basketDeleteSVG} alt="basket_delete" />
                </div>
              </div>
            </div>
            <div className={s.line}></div>
            <div className={s.product__item}>
              <div className={s.product__row}>
                <div className={s.product__image}>
                  <img src={productPNG} alt="" />
                </div>
                <div className={s.product__body}>
                  <div className={s.volume__block}>
                    <img src={bottleSVG} alt="bottle" />
                    <div className={s.volume}>450мл</div>
                  </div>
                  <div className={s.product__name}>
                    AOS средство для мытья посуды Crystal
                  </div>
                  <div className={s.product__info}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam interdum ut justo, vestibulum sagittis iaculis
                    iaculis. Quis mattis vulputate feugiat massa vestibulum
                    duis.{" "}
                  </div>
                </div>
                <div className={s.line__small}></div>
                <div className={s.quantity}>
                  <div className={s.down_btn}>-</div>
                  <div className={s.number}>1</div>
                  <div className={s.up_btn}>+</div>
                </div>
                <div className={s.line__small}></div>
                <div className={s.price}>48,76 ₸</div>
                <div className={s.line__small}></div>
                <div className={s.basket__delete}>
                  <img src={basketDeleteSVG} alt="basket_delete" />
                </div>
              </div>
            </div>
            <div className={s.line}></div>
          </div>
        </div>
        <div className={s.checkout__block}>
          <div className={s.checkout__btn}>Оформить заказ</div>
          <div className={s.checkout__sum}>1 348,76 ₸</div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
