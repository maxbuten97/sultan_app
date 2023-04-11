import { render, screen } from "@testing-library/react";
import OrderingBasketProduct from "./OrderingBasketProduct";
import { IBasketProduct } from "../../../shared/interfaces/BasketProductInterface";

test("Проверить отображение компонента продукта в заказе", () => {
  let basketProduct: IBasketProduct = {
    count: 1,
    product: {
      id: "1",
      url: "testURL",
      name: "Test1",
      typeSize: "мл",
      size: 500,
      barcode: "124554376543",
      manufacture: "manufactureTest",
      brand: "brandTest",
      description: "descriptionTest",
      price: 350,
      category: ["category1", "category2"],
    },
    totalSum: 100,
  };
  render(<OrderingBasketProduct basketProduct={basketProduct} />);
  let sizeText = screen.getByTestId("sizeText");
  let nameTest = screen.getByTestId("nameTest");
  let countTest = screen.getByTestId('countTest');
  let priceTest = screen.getByTestId('priceTest');
  expect(sizeText).toHaveTextContent(
    `${basketProduct.product.size} ${basketProduct.product.typeSize}`
  );
  expect(nameTest).toHaveTextContent(
    `${basketProduct.product.brand} ${basketProduct.product.name}`
  );
  expect(countTest).toHaveTextContent(`${basketProduct.count}`)
  expect(priceTest).toHaveTextContent(`${basketProduct.product.price}`)
});
