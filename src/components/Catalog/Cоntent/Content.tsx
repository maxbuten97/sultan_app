import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Content.module.css";
import airWickPNG from "../../../image/airwick.png";
import masterFreshPNG from "../../../image/masterFresh.png";
import sibiarPNG from "../../../image/Sibiar.png";
import cottonClubPNG from "../../../image/cottonClub.png";
import camayPNG from "../../../image/camay.png";
import ProductItem from "../ProductItem/ProductItem";
import { IProduct } from "../../../shared/interfaces/ProductInterface";
import { CareCategoriesEnum } from "../../../shared/enums/CareCategoriesEnum";
import { ICareCategory } from "../../../shared/interfaces/CareCategoryInterface";
import ManufactureFilter from "../ManufactureFilter/ManufactureFilter";
import CareCategory from "./CareCategory/CareCategory";
import PriceFilter from "./PriceFilter/PriceFilter";
const basketDeleteSVG: string =
  require("../../../image/basket_delete.svg").default;

const Content = (props: {
  selectedCareCategory: string;
  setSelectedCareCategory: (category: string) => void;
  storage: IProduct[];
  careCategories: ICareCategory[];
  deleteProduct: (product: IProduct) => void;
  isAdmin: boolean;
  sorted: string;
}) => {
  const [priceMinFilter, setPriceMinFilter] = useState<number>();
  const [priceMaxFilter, setPriceMaxFilter] = useState<number>();
  const [manufactureFilter, setManufactureFilter] = useState<string[]>([]);

  const manufacturesSet = new Set(
    props.storage.map((product) => {
      return product.manufacture;
    })
  );

  const manufactures: string[] = Array.from(manufacturesSet.values());

  function changeManufactureFilter(manufacture: string) {
    if (manufactureFilter.includes(manufacture)) {
      setManufactureFilter(manufactureFilter.filter((m) => m !== manufacture));
    } else {
      setManufactureFilter([manufacture]);
    }
  }

  function showContent() {
    let newProducts = props.storage;
    /**Фильтрация по выбранной категории ухода */
    if (props.selectedCareCategory) {
      newProducts = newProducts.filter((item) =>
        item.category.includes(props.selectedCareCategory)
      );
    }

    if (manufactureFilter.length > 0) {
      manufactureFilter.forEach((item) => {
        newProducts = newProducts.filter(
          (product) => product.manufacture === item
        );
      });
    }

    /**Фильтрация по минимальному значению */
    if (priceMinFilter) {
      newProducts = newProducts.filter((item) => item.price > priceMinFilter);
    }
    /**Фильтрация по максимальному значению */
    if (priceMaxFilter) {
      newProducts = newProducts.filter((item) => item.price < priceMaxFilter);
    }
    /**Сортировка от А до Я */
    if (props.sorted === "nameDesc") {
      newProducts
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => a.brand.localeCompare(b.brand));
    }
    /**Сортировка от Я до А */
    if (props.sorted === "nameAsc") {
      newProducts
        .sort((a, b) => b.name.localeCompare(a.name))
        .sort((a, b) => b.brand.localeCompare(a.brand));
    }
    /**Сортировка цены min */
    if (props.sorted === "priceDesc") {
      newProducts.sort((a, b) => a.price - b.price);
    }
    /**Сортировка цены max */
    if (props.sorted === "priceAsc") {
      newProducts.sort((a, b) => b.price - a.price);
    }
    /**Условие, если пустой массив, вернуть результат не найден */
    if (newProducts.length === 0) {
      return <div className={s.nonResult}>Результатов не найдено...</div>;
    }
    return newProducts.map((item) => {
      return (
        <ProductItem
          item={item}
          key={item.id}
          deleteProduct={props.deleteProduct}
          isAdmin={props.isAdmin}
        />
      );
    });
  }

  return (
    <div className={s.content}>
      <div className={s.container}>
        <div className={s.column}>
          <div className={s.sidebar_filter}>
            <div className={s.sidebar__title}>Подбор по параметрам</div>
            <PriceFilter
              setPriceMinFilter={setPriceMinFilter}
              setPriceMaxFilter={setPriceMaxFilter}
            />
            <ManufactureFilter
              manufactures={manufactures}
              changeManufactureFilter={changeManufactureFilter}
            />
            <div className={s.view__buttons_block}>
              <div className={s.view__button}>Показать</div>
              <div className={s.basket__delete}>
                <img
                  className={s.basket__delete_img}
                  src={basketDeleteSVG}
                  alt="basket_delete"
                />
              </div>
            </div>
            <div className={s.categories__filter}>
              {props.careCategories.map((careCategory, index) => {
                return (
                  <CareCategory
                    careCategory={careCategory}
                    key={index}
                    selectedCareCategory={props.selectedCareCategory}
                    setSelectedCareCategory={props.setSelectedCareCategory}
                  />
                );
              })}
            </div>
            <div className={s.line}></div>
            <div className={s.brands}>
              <div className={s.brands__title}>Бренды</div>
              <div className={s.brands__list}>
                <div className={s.brands__item}>
                  <div className={s.imgWrapper}>
                    <img
                      className={s.image}
                      src={airWickPNG}
                      alt="categories"
                    />
                  </div>
                </div>
                <div className={s.brands__item}>
                  <div className={s.imgWrapper}>
                    <img
                      className={s.image}
                      src={masterFreshPNG}
                      alt="categories"
                    />
                  </div>
                </div>
                <div className={s.brands__item}>
                  <div className={s.imgWrapper}>
                    <img className={s.image} src={sibiarPNG} alt="categories" />
                  </div>
                </div>
                <div className={s.brands__item}>
                  <div className={s.imgWrapper}>
                    <img
                      className={s.image}
                      src={cottonClubPNG}
                      alt="categories"
                    />
                  </div>
                </div>
                <div className={s.brands__item}>
                  <div className={s.imgWrapper}>
                    <img className={s.image} src={camayPNG} alt="categories" />
                  </div>
                </div>
              </div>
              <div className={s.view}>Показать все</div>
            </div>
          </div>

          <div className={s.product__list}>
            {showContent()}

            <div className={s.pagination__block}>
              {/* <ul className={s.pagination}>
                <li>
                  <div className={s.arrow}>❮</div>
                </li>
                <li>
                  <a className={s.active} href="/">
                    1
                  </a>
                </li>
                <li>
                  <a href="/">2</a>
                </li>
                <li>
                  <a href="/">3</a>
                </li>
                <li>
                  <a href="/">4</a>
                </li>
                <li>
                  <a href="/">5</a>
                </li>
                <li>
                  <div className={s.arrow}>❯</div>
                </li>
              </ul> */}
            </div>
            {/* Заканчиваются тут */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
