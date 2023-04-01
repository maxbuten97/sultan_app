import React, { useState } from "react";
import s from "./ManufactureFilterSearch.module.css";
const searchSVG: string = require("../../../../image/search.svg").default;

const ManufactureFilterSearch = (props: {
  searchManufacture: (searchText: string) => void;
}) => {
  const [searchText, setSearchText] = useState<string>("");

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    switch (e.code) {
      case "Enter":
        break;
    }
  }
  return (
    <div className={s.search}>
      <div className={s.input__wrapper}>
        <input
          className={s.search__input}
          type="text"
          placeholder="Поиск..."
          onInput={(e: React.FormEvent<HTMLInputElement>) =>
            setSearchText((e.target as HTMLInputElement).value)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => onKeyDown(e)}
        />
      </div>
      <div
        className={s.image__wrapper}
        onClick={() => props.searchManufacture(searchText)}
      >
        <img className={s.search__image} src={searchSVG} alt="search" />
      </div>
    </div>
  );
};

export default ManufactureFilterSearch;
