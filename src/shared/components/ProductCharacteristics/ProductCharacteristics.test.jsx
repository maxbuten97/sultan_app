import { render, screen } from "@testing-library/react";
import ProductCharacteristics from "./ProductCharacteristics";

test("Проверить содержимое элементов отображение штрихкода, производителя и бренда в компоненте продуктовых характеристик", () => {
  const barcode = "124545454234";
  const manufacture = "AOS";
  const brand = "AOS_brand";
  render(
    <ProductCharacteristics
      barcode={barcode}
      manufacture={manufacture}
      brand={brand}
    />
  );
  const renderBarcode = screen.getByTestId("barcode");
  const renderManufacture = screen.getByTestId("manufacture");
  const renderBrand = screen.getByTestId("brand");
  expect(renderBarcode).toBeInTheDocument();
  expect(renderManufacture).toBeInTheDocument();
  expect(renderBrand).toBeInTheDocument();
  expect(renderBarcode).toHaveTextContent(`${barcode}`)
  expect(renderManufacture).toHaveTextContent(`${manufacture}`)
  expect(renderBrand).toHaveTextContent(`${brand}`)
});
