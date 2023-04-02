import React from "react";
import { NavLink } from "react-router-dom";
import s from "./BreadCrumbs.module.css";

const BreadCrumbs = () => {
  return (
    <div className={s.breadcrumbs}>
      <div className={s.container}>
        <div className={s.row}>
          <NavLink to="/sultan_app" className={s.item}>
            Главная
          </NavLink>
          <div className={s.line}></div>
          <div className={s.categories__select}>
            Корзина
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
