import React from "react";
import s from "./CareCategory.module.css";

const CareCategory = (props: {
  careCategory: {
    category: string;
    name: string;
  };
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
      return s.categoriesTitle;
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

export default CareCategory;
