import { fireEvent, render, screen } from "@testing-library/react";
import ManufactureFilterCheckbox from "./ManufactureFilterCheckbox";

test("Проверить нажатие на кнопку checkbox", () => {
  let selectManufacture = "Sicilia";
  function selectManufactureFilter(manufacture: string): void {
    selectManufacture = manufacture;
  }
  render(
    <ManufactureFilterCheckbox
      manufacture={selectManufacture}
      selectManufactureFilter={selectManufactureFilter}
    />
  );

  let manufactureCheckbox = screen.getByTestId(
    "ManufactureCheckboxTest"
  ) as HTMLInputElement;
  let checkboxName = screen.getByTestId("checkbox_name");
  fireEvent.click(manufactureCheckbox);
  expect(manufactureCheckbox).toBeInTheDocument();
  expect(manufactureCheckbox.checked).toBeTruthy();
  expect(checkboxName).toHaveTextContent(selectManufacture)
});
