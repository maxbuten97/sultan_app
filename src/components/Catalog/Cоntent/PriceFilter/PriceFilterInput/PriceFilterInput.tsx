import React from "react";
import s from "./PriceFilterInput.module.css";

const PriceFilterInput = (props: {
  placeholder: string;
  setPriceFilter: (value: number) => void;
}) => {
  return (
    <div>
      <input
        className={s.price__input_from}
        type="number"
        placeholder={props.placeholder}
        onInput={(event: React.FormEvent<HTMLInputElement>) =>
          props.setPriceFilter(+(event.target as HTMLInputElement).value)
        }
      />
    </div>
  );
};

export default PriceFilterInput;
