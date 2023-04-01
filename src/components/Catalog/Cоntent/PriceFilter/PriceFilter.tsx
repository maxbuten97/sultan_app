import React from "react";
import s from "./PriceFilter.module.css";
import PriceFilterInput from "./PriceFilterInput/PriceFilterInput";

const PriceFilter = (props: {
  setPriceMinFilter: (value: number) => void;
  setPriceMaxFilter: (value: number) => void;
}) => {
  function selectMinFilter(value: number) {
    props.setPriceMinFilter(value);
  }
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
        {/* <input className={s.price__input_from} type="text" placeholder="0" /> */}
        <div className={s.delimiter}>-</div>
        {/* <input className={s.price__input_to} type="text" placeholder="10 000" /> */}
        <PriceFilterInput
          placeholder="10 000"
          setPriceFilter={selectMaxFilter}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
