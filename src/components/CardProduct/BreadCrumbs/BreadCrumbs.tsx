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
          <NavLink to="/catalog/" className={s.item}>
            Косметика и уход
          </NavLink>
          <div className={s.line}></div>
          <NavLink to="/catalog" className={s.item}>
            Уход за руками
          </NavLink>
          <div className={s.line}></div>
          <NavLink to="/catalog" className={s.item}>
            Мыло твердое
          </NavLink>
          <div className={s.line}></div>
          <div className={s.product__name}>
            BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот, 90 г
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
