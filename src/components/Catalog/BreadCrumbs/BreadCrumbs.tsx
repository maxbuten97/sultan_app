import React from "react";
import s from "./BreadCrumbs.module.css";
import { NavLink } from "react-router-dom";

const BreadCrumbs = () => {
  return (
    <div className={s.breadcrumbs}>
      <div className={s.container}>
        <div className={s.row}>
          <NavLink to="/" className={s.item}>
            Главная
          </NavLink>
          <div className={s.line}></div>
          <a href="/" className={s.categories__select}>
            Косметика и уход
          </a>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
