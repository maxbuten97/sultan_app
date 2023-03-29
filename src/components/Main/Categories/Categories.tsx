import React from "react";
import s from "./Categories.module.css";
import { NavLink } from "react-router-dom";
import itemPNG from "../../../image/categories__item.png";

const Categories = () => {
  return (
    <div className={s.categories}>
      <div className={s.container}>
        <NavLink to="/catalog">
          <div className={s.categories__title}>
            <div className={s.categories__text}>
              <span className={s.categories__text_orange}>Категории</span>{" "}
              товаров
            </div>
          </div>
        </NavLink>
        <div className={s.categories__subtitle}>
          10 000+ ходовых позиций по специальным ценам
        </div>
        <div className={s.categories__list}>
          <div className={s.categories__block}>
            <div className={s.categories__item}>
              <div className={s.imgWrapper}>
                <img className={s.categories__image} src={itemPNG} alt="categories" />
              </div>
            </div>
            <div className={s.categories__name}>Бытовая химия</div>
          </div>

          {/* 4 бесполезных карточки */}
          <div className={s.categories__block}>
            <div className={s.categories__item}>
              <div className={s.imgWrapper}>
                <img className={s.categories__image} src={itemPNG} alt="categories" />
              </div>
            </div>
            <div className={s.categories__name}>Бытовая химия</div>
          </div>
          <div className={s.categories__block}>
            <div className={s.categories__item}>
              <div className={s.imgWrapper}>
                <img className={s.categories__image} src={itemPNG} alt="categories" />
              </div>
            </div>
            <div className={s.categories__name}>Бытовая химия</div>
          </div>
          <div className={s.categories__block}>
            <div className={s.categories__item}>
              <div className={s.imgWrapper}>
                <img className={s.categories__image} src={itemPNG} alt="categories" />
              </div>
            </div>
            <div className={s.categories__name}>Бытовая химия</div>
          </div>
          <div className={s.categories__block}>
            <div className={s.categories__item}>
              <div className={s.imgWrapper}>
                <img className={s.categories__image} src={itemPNG} alt="categories" />
              </div>
            </div>
            <div className={s.categories__name}>Бытовая химия</div>
          </div>
        </div>
        {/* Заканчиваются тут */}
      </div>
    </div>
  );
};

export default Categories;
