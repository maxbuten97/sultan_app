import { fireEvent, render, screen } from "@testing-library/react";
import ManufactureFilterSearch from "./ManufactureFilterSearch";

test("Проверка значения input в поиске производителей", () => {
  let valueInput = "";
  const searchManufacture = (searchText: string) => {
    valueInput = searchText;
  };

  render(<ManufactureFilterSearch searchManufacture={searchManufacture} />);
  let input = screen.getByTestId("value-elem");
  fireEvent.input(input, {
    target: { value: "123" },
  });
  const buttonTest = screen.getByTestId("buttonTest");
  fireEvent.click(buttonTest);
  expect(valueInput).toEqual("123");
  expect(input).toBeInTheDocument();
});
