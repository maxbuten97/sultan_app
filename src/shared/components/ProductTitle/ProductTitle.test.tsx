import { render, screen } from "@testing-library/react";
import ProductTitle from "./ProductTitle";

test("Проверить содержимое элементов отображение имени продукта в компоненте заголовка", () => {
  const name = "Супер средство";
  const brand = "Aos";

  render(<ProductTitle brand={brand} name={name} />);

  const renderName = screen.getByTestId("nameProduct");
  expect(renderName).toBeInTheDocument();
  expect(renderName).toHaveTextContent(`${brand} ${name}`)

});
