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
          <div className={s.line}>
          </div>
          <a href="/" className={s.item}>
            Косметика и уход
          </a>
          <div className={s.line}>
          </div>
          <a href="/" className={s.item}>
            Уход за руками
          </a>
          <div className={s.line}>
          </div>
          <a href="/" className={s.item}>
            Мыло твердое
          </a>
          <div className={s.line}>
          </div>
          <div className={s.product__name}>
            BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот, 90 г
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
