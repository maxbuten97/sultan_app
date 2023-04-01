import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import operatorPNG from "../../image/operator.png";
import BasketHeader from "./BasketHeader/BasketHeader";
import { IBasketProduct } from "../../shared/interfaces/BasketProductInterface";
const searchSVG: string = require("../../image/search.svg").default;
const geoSVG: string = require("../../image/geo.svg").default;
const emailSVG: string = require("../../image/email.svg").default;
const logoSVG: string = require("../../image/logo_sultan.svg").default;
const Header = (props: { basketProducts: IBasketProduct[] }) => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.header__row}>
          <div className={s.header__info}>
            <div className={s.adress}>
              <div className={s.imgWrapper}>
                <img className={s.adress__geoSvg} src={geoSVG} alt="geo" />
              </div>
              <div className={s.adress__text}>
                г. Кокчетав, ул. Ж. Ташенова 129Б <br />
                <span className={s.subtext}>(Рынок Восточный)</span>
              </div>
            </div>
            <div className={s.line}></div>
            <div className={s.email}>
              <div className={s.imgWrapper}>
                <img src={emailSVG} alt="email" />
              </div>
              <div className={s.email__text}>
                opt.sultan@mail.ru <br />
                <span className={s.subtext}>На связи в любое время</span>
              </div>
            </div>
          </div>

          {/* Для мобилки */}
          <div className={s.burger__mob_wrap}>
            <div className={s.burger__mob}></div>
          </div>
          <div className={s.logoWrapper}>
            <NavLink to="/">
              <img className={s.logo__small} src={logoSVG} alt="logo" />
            </NavLink>
          </div>
          {/*  */}
          <div className={s.header__menu}>
            <div className={s.menu__about}>О компании</div>
            <div className={s.line_small}></div>
            <div className={s.menu__delivery}>Доставка и оплата</div>
            <div className={s.line_small}></div>
            <div className={s.menu__return}>Возврат</div>
            <div className={s.line_small}></div>
            <div className={s.menu__contacts}>Контакты</div>
          </div>
        </div>
        <div className={s.Nav}>
          <div className={s.nav__row}>
            <div className={s.nav__logoWrapper}>
              <NavLink to="/">
                <img className={s.logo__img} src={logoSVG} alt="logo" />
              </NavLink>
            </div>
            <div className={s.catalog}>
              <div className={s.catalog__btn}>
                <NavLink to="/catalog">
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
            {/* Для мобилки */}
            <div className={s.search__mob_wrap}>
              <div className={s.search__mob}>Поиск</div>
            </div>
            {/*  */}

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
            <div className={s.line__price_list}></div>
            <div className={s.price_list}>
              <div className={s.price_list__btn}>
                <div className={s.price_list__text}>Прайс-лист</div>
              </div>
            </div>
            <div className={s.line__price_list}></div>
            <NavLink to="/basket">
              <BasketHeader basketProducts={props.basketProducts} />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
