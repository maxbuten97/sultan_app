import React from "react";
import s from "./CareCategoryItem.module.css";
import { ICareCategory } from "../../../../shared/interfaces/CareCategoryInterface";

const CareCategoryItem = (props: {
  careCategory: ICareCategory;
  selectedCareCategory: string[];
  setSelectedCareCategory: (category: string[]) => void;
}) => {
  function selectCareCategory() {
    if (props.selectedCareCategory.includes(props.careCategory.category)) {
      const filteredCareCategories = props.selectedCareCategory.filter(
        (careCategory) => careCategory !== props.careCategory.category
      );
      props.setSelectedCareCategory(filteredCareCategories);
    } else {
      props.setSelectedCareCategory([
        props.careCategory.category,
        ...props.selectedCareCategory,
      ]);
    }
  }

  function getClassNameBySelected() {
    if (props.selectedCareCategory.includes(props.careCategory.category)) {
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
