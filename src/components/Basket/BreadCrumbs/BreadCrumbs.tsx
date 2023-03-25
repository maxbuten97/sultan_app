import React from "react";
import s from "./BreadCrumbs.module.css";

const BreadCrumbs = () => {
  return (
    <div className={s.breadcrumbs}>
      <div className={s.container}>
        <div className={s.row}>
          <a href="/" className={s.item}>
            Главная
          </a>
          <div className={s.line}></div>
          <a href="/" className={s.categories__select}>
            Корзина
          </a>

        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
