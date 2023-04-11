import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PriceFilterInput from "./PriceFilterInput";

test("Проверить coбытие ввода компонента по цене", () => {
  const placeholder = "Test placeholder";
  let valueInput = 0;
  function setPriceFilter(value: number): void {
    valueInput = value;
  }
  render(
    <PriceFilterInput
      placeholder={placeholder}
      setPriceFilter={setPriceFilter}
    />
  );

  let input = screen.getByTestId("inputTest") as HTMLInputElement;
  fireEvent.input(input, {
    target: { value: 111 },
  });
  expect(valueInput).toEqual(111);
  expect(input.value).toEqual('111');
  expect(input).toBeInTheDocument();
});
