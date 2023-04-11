import React from "react";
import s from "./SortingProductSelect.module.css";
const SortingProductSelect = (props: {
  sorted: string;
  setSorted: (sorted: string) => void;
}) => {
  return (
    <div className={s.sorting__name}>
      <label data-testid="label-sort">Сортировка:</label>
      <select
        name="sorted"
        id="sorted"
        data-testid="select1"
        className={s.select}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          props.setSorted((event.target as HTMLSelectElement).value)
        }
      >
        <option className={s.default__select} value="default">
          Выберите сортировку
        </option>
        <option value="nameDesc">Название от А до Я</option>
        <option value="nameAsc">Название от Я до А</option>
        <option value="priceDesc">Дешевле</option>
        <option value="priceAsc">Дороже</option>
      </select>
    </div>
  );
};

export default SortingProductSelect;
