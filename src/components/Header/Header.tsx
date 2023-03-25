import React from "react";
import s from "./Header.module.css";

const geoSVG: string = require("../../image/geo.svg").default;
const emailSVG: string = require("../../image/email.svg").default;
const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;
