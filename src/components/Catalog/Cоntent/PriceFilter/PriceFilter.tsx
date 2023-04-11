import React from "react";
import s from "./PriceFilter.module.css";
import PriceFilterInput from "./PriceFilterInput/PriceFilterInput";

const PriceFilter = (props: {
  setPriceMinFilter: (value: number) => void;
  setPriceMaxFilter: (value: number) => void;
}) => {
  /**Фильтр по минимальной цене */
  function selectMinFilter(value: number) {
    props.setPriceMinFilter(value);
  }
  /**Фильтр по максимальной цене */
  function selectMaxFilter(value: number) {
    props.setPriceMaxFilter(value);
  }
  return (
    <div className={s.price__filter}>
      <div className={s.price__title}>
        Цена <span className={s.strong}>₸</span>{" "}
      </div>
      <div className={s.price}>
        <PriceFilterInput placeholder="0" setPriceFilter={selectMinFilter} />
        <div className={s.delimiter}>-</div>
        <PriceFilterInput
          placeholder="10 000"
          setPriceFilter={selectMaxFilter}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
