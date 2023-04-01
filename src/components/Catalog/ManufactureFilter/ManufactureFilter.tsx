import React from "react";
import s from "./ManufactureFilter.module.css";
import ManufactureFilterCheckbox from "./ManufactureFilterCheckbox/ManufactureFilterCheckbox";
import ManufactureFilterSearch from "./ManufactureFilterSearch/ManufactureFilterSearch";

/** Полный список продуктов */

const ManufactureFilter = (props: {
  manufactures: string[];
  changeManufactureFilter: (manufactureFilter: string) => void;
  searchManufacture: (searchText: string) => void;
}) => {
  return (
    <div className={s.manufacturer__filter}>
      <div className={s.manufacturer__title}>Производитель</div>
      <ManufactureFilterSearch searchManufacture={props.searchManufacture} />
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
    </div>
  );
};

export default ManufactureFilter;
