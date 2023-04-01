import React from "react";
import { NavLink } from "react-router-dom";
import s from "./BreadCrumbs.module.css";

const BreadCrumbs = () => {
  return (
    <div className={s.breadcrumbs}>
      <div className={s.container}>
        <NavLink to="/basket">
          <div className={s.mobil__return}>В корзину</div>
        </NavLink>
        <div className={s.row}>
          <NavLink to="/sultan_app" className={s.item}>
            Главная
          </NavLink>
          <div className={s.line}></div>
          <NavLink to="/basket" className={s.item}>
            Корзина
          </NavLink>
          <div className={s.line}></div>
          <a href="/" className={s.categories__select}>
            Оформление заказа
          </a>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
