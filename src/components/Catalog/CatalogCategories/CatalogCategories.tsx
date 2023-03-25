import React from "react";
import s from "./CatalogCategories.module.css";
const burgerSVG: string = require("../../../image/burger.svg").default;
const rectangleSVG: string =
  require("../../../image/rectangle_black.svg").default;
const CatalogCategories = () => {
  return (
    <div className={s.catalog__categories}>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.title}>Косметика и Гигиена</div>
          <div className={s.sorting}>
            <div className={s.sorting__name}>
              Сортировка: <span className={s.grey}>Название</span>
            </div>
            <div className={s.view}>
              <div className={s.burger}>
                <img src={burgerSVG} alt="burger" />
              </div>
              <div className={s.rectangle}>
                <img src={rectangleSVG} alt="rectangle" />
              </div>
            </div>
          </div>
        </div>
        <div className={s.categories__block}>
          <div className={s.list}>
            <div className={s.item}>
              Уход <br /> за телом
            </div>
            <div className={s.item}>
              Уход <br /> за руками
            </div>
            <div className={s.item}>
              Уход <br /> за ногами
            </div>
            <div className={s.item}>
              Уход <br /> за лицом
            </div>
            <div className={s.item}>
              Уход <br /> за волосами
            </div>
            <div className={s.item}>
              Средства <br /> для загара
            </div>
            <div className={s.item}>
              Средства
              <br /> для бритья
            </div>
            <div className={s.item}>
              Подарочные
              <br /> наборы
            </div>
            <div className={s.item}>
              Гигиеническая
              <br /> продукция
            </div>
            <div className={s.item}>
              Гигиена
              <br /> полости рта
            </div>
            <div className={s.item}>
              Бумажная
              <br /> продукция
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogCategories;
