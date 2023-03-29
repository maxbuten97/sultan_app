import React from "react";
import s from "./CareCategoryItem.module.css";
import { ICareCategory } from "../../../../shared/interfaces/CareCategoryInterface";


const CareCategoryItem = (props: {
  careCategory: ICareCategory;
  selectedCareCategory: string;
  setSelectedCareCategory: (category: string) => void;
}) => {

  function selectCareCategory() {
    if(props.selectedCareCategory === props.careCategory.category) {
      props.setSelectedCareCategory('')
    } else {
      props.setSelectedCareCategory(props.careCategory.category);
    }
  }

  function getClassNameBySelected() {
    if (props.selectedCareCategory === props.careCategory.category) {
      return s.categoriesItemActive;
    } else {
      return s.categoriesItem;
    }
  }
  return (
    <div
      className={getClassNameBySelected()}
      onClick={() => selectCareCategory()}
    >
      {props.careCategory.name}
    </div>
  );
};

export default CareCategoryItem;
