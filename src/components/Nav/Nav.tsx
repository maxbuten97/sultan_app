import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";
import operatorPNG from "../../image/operator.png";
const logoSVG: string = require("../../image/logo_sultan.svg").default;
const searchSVG: string = require("../../image/search.svg").default;
const basketSVG: string = require("../../image/basket.svg").default;
const Nav = () => {
  return (
    <div className={s.Nav}>
      <div className={s.container}>
        <div className={s.nav__row}>
          <div className={s.nav__logoWrapper}>
            <img className={s.logo} src={logoSVG} alt="logo" />
          </div>
          <div className={s.catalog}>
            <div className={s.catalog__btn}>
              <NavLink to='/catalog'>
              <div className={s.catalog__text}>Каталог</div>
              </NavLink>
            </div>
          </div>
          <div className={s.search}>
            <div className={s.input__wrapper}>
              <input
                className={s.search__input}
                type="text"
                placeholder="Поиск..."
              />
            </div>
            <div className={s.image__wrapper}>
              <img className={s.search__image} src={searchSVG} alt="search" />
            </div>
          </div>
          <div className={s.info}>
            <div className={s.info__text}>
              <a className={s.tel} href="tel:+77774900091">
                +7 (777) 490-00-91
              </a>
              <div className={s.working_hours}>время работы: 9:00-20:00</div>
              <div className={s.callback}>Заказать звонок</div>
            </div>
            <div className={s.info__img}>
              <img
                className={s.operator__img}
                src={operatorPNG}
                alt="operator"
              />
            </div>
          </div>
          <div className={s.line}></div>
          <div className={s.price_list}>
            <div className={s.price_list__btn}>
              <div className={s.price_list__text}>Прайс-лист</div>
            </div>
          </div>
          <div className={s.line}></div>
          <NavLink to='/basket'>
          <div className={s.basket}>
            <div className={s.basket__imgWrapper}>
              <img className={s.basket__img} src={basketSVG} alt="basket" />
              <span className={s.basket__number}>3</span>
            </div>
            <div className={s.basket__text}>
                Корзина <br />
                <span className={s.sum}>12 478 ₸</span>
            </div>
          </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
