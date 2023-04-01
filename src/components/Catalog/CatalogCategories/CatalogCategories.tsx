import React, { useState } from "react";
import s from "./CatalogCategories.module.css";
import { ICareCategory } from "../../../shared/interfaces/CareCategoryInterface";
import CareCategoryItem from "../Cоntent/CareCategoryItem/CareCategoryItem";
import SortingProductSelect from "./SortingProductSelect/SortingProductSelect";
const burgerSVG: string = require("../../../image/burger.svg").default;
const rectangleSVG: string =
  require("../../../image/rectangle_black.svg").default;

const CatalogCategories = (props: {
  selectedCareCategory: string[];
  setSelectedCareCategory: (category: string[]) => void;
  careCategories: ICareCategory[];
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  sorted: string;
  setSorted: (sorted: string) => void;
}) => {
  const [adminCheckbox, setAdminCheckbox] = useState<boolean>(props.isAdmin);

  function switchIsAdmin(e: React.FormEvent<HTMLInputElement>) {
    props.setIsAdmin((e.target as HTMLInputElement).checked);
    setAdminCheckbox((e.target as HTMLInputElement).checked);
  }
  return (
    <div className={s.catalog__categories}>
      <div className={s.container}>
        <div className={s.adminCheckbox}>
          <input
            className={s.adminCheck}
            onChange={(e) => switchIsAdmin(e)}
            type="checkbox"
            checked={adminCheckbox}
          />
          Admin mode
        </div>
        <div className={s.header}>
          <div className={s.title}>Косметика и Гигиена</div>
          <div className={s.sorting}>
            <SortingProductSelect
              sorted={props.sorted}
              setSorted={props.setSorted}
            />
            <div className={s.view}>
              <div className={s.burger}>
                <img className={s.burger_image} src={burgerSVG} alt="burger" />
              </div>
              <div className={s.rectangle}>
                <img
                  className={s.rectangle_image}
                  src={rectangleSVG}
                  alt="rectangle"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={s.categories__block}>
          <div className={s.list}>
            {props.careCategories.map((careCategory, index) => {
              return (
                <CareCategoryItem
                  careCategory={careCategory}
                  selectedCareCategory={props.selectedCareCategory}
                  setSelectedCareCategory={props.setSelectedCareCategory}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogCategories;
