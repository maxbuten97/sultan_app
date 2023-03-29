import React, { useState } from "react";
import s from "./ManufactureFilter.module.css";
import ManufactureFilterCheckbox from "./ManufactureFilterCheckbox/ManufactureFilterCheckbox";
const searchSVG: string = require("../../../image/search.svg").default;

/** Полный список продуктов */

const ManufactureFilter = (props: {
  manufactures: string[];
  changeManufactureFilter: (manufactureFilter: string) => void;
}) => {
  


  return (
    <div className={s.manufacturer__filter}>
      <div className={s.manufacturer__title}>Производитель</div>
      <div className={s.search}>
        <div className={s.input__wrapper}>
          <input
            className={s.search__input}
            type="text"
            placeholder="Поиск..."
          />
        </div>
        <div className={s.image__wrapper}>
          <img className={s.search__image} src={searchSVG} alt="search" />
        </div>
      </div>
      <div className={s.checkbox__block}>
        {props.manufactures.map((manufacture, index) => {
          return (
            <ManufactureFilterCheckbox
              manufacture={manufacture}
              selectManufactureFilter={props.changeManufactureFilter}
              
              key={index}
            />
          );
        })}
      </div>
      <div className={s.view}>Показать все</div>
    </div>
  );
};

export default ManufactureFilter;
