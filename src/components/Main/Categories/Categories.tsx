import React from "react";
import s from "./Categories.module.css";
import itemPNG from "../../../image/categories__item.png";

const Categories = () => {
  return (
    <div className={s.categories}>
      <div className={s.container}>
        <div className={s.categories__title}>
          <span className={s.categories__text}>Категории</span> товаров
        </div>
        <div className={s.categories__subtitle}>
          10 000+ ходовых позиций по спецмальным ценам
        </div>
        <div className={s.categories__list}>
          <div className={s.categories__block}>
            <div className={s.categories__item}>
              <div className={s.imgWrapper}>
                <img src={itemPNG} alt="categories" />
              </div>
            </div>
            <div className={s.categories__name}>Бытовая химия</div>
          </div>

          {/* 4 бесполезных карточки */}
          <div className={s.categories__block}>
            <div className={s.categories__item}>
              <div className={s.imgWrapper}>
                <img src={itemPNG} alt="categories" />
              </div>
            </div>
            <div className={s.categories__name}>Бытовая химия</div>
          </div>
          <div className={s.categories__block}>
            <div className={s.categories__item}>
              <div className={s.imgWrapper}>
                <img src={itemPNG} alt="categories" />
              </div>
            </div>
            <div className={s.categories__name}>Бытовая химия</div>
          </div>
          <div className={s.categories__block}>
            <div className={s.categories__item}>
              <div className={s.imgWrapper}>
                <img src={itemPNG} alt="categories" />
              </div>
            </div>
            <div className={s.categories__name}>Бытовая химия</div>
          </div>
          <div className={s.categories__block}>
            <div className={s.categories__item}>
              <div className={s.imgWrapper}>
                <img src={itemPNG} alt="categories" />
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
