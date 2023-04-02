import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import s from "./BreadCrumbs.module.css";
import { IProduct } from '../../../shared/interfaces/ProductInterface';

const BreadCrumbs = (props: {
  storage: IProduct[];
}) => {
  const { id } = useParams();
  const [card] = useState<IProduct | undefined>(() => {
    return props.storage.find((item) => item.id === id);
  });
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
          <div className={s.product__name}>
           {card?.brand} {card?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
