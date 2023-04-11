import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CareCategory from "./CareCategory";

test("Проверить кнопку выбора категории", () => {
  const careCategoryTest = {
    name: "test",
    category: "test-category",
  };
  let selectedCategory: string[] = [];

  function setSelectedCareCategory(category: string[]): void {
    selectedCategory = category;
  }

  render(
    <CareCategory
      careCategory={careCategoryTest}
      selectedCareCategory={selectedCategory}
      setSelectedCareCategory={setSelectedCareCategory}
    />
  );

  let selectCategoryTest = screen.getByTestId("selectCategoryTest");
  fireEvent.click(selectCategoryTest);
  expect(selectedCategory).toEqual(["test-category"]);
  expect(selectCategoryTest).toBeInTheDocument();
});
