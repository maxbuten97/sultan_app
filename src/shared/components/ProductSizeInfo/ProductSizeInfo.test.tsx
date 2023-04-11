import { render, screen } from "@testing-library/react";
import ProductSizeInfo from "./ProductSizeInfo";

test("Проверить входные данные размера продукта", () => {
  let sizeInfo = 999;
  let typeSize = "ASFDSADASDASDSADASD";
  render(<ProductSizeInfo size={sizeInfo} typeSize={typeSize} />);
  const sizeProduct = screen.getByTestId("sizeProduct");
  const sizeTest = screen.getByText(sizeInfo);
  const sizeText = screen.getByText(typeSize);
  expect(sizeProduct).toBeInTheDocument();
  expect(sizeTest).toBeInTheDocument();
  expect(sizeText).toBeInTheDocument()
  expect(sizeProduct).toHaveTextContent(`${sizeInfo} ${typeSize}`)
  expect(sizeTest).toHaveTextContent(`${sizeInfo}`);
  expect(sizeText).toHaveTextContent(typeSize)
});
