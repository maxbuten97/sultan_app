import { render, screen } from "@testing-library/react";
import BasketHeader from "./BasketHeader";
import { IBasketProduct } from "../../../shared/interfaces/BasketProductInterface";

test("Проверить отображение количества товаров и суммы корзины", () => {
  let basketProducts: IBasketProduct[] = [
    {
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
      totalSum: 350,
    },
    {
      count: 2,
      product: {
        id: "2",
        url: "testURL2",
        name: "Test2",
        typeSize: "мл",
        size: 800,
        barcode: "2343546235324",
        manufacture: "manufactureTest2",
        brand: "brandTest2",
        description: "descriptionTest2",
        price: 750,
        category: ["category3", "category4"],
      },
      totalSum: 1500,
    },
  ];

  render(<BasketHeader basketProducts={basketProducts} />);

  let countBasketTest = screen.getByTestId("countBasketTest");
  let sumBasketTest = screen.getByTestId("sumBasketTest");
  expect(countBasketTest).toBeInTheDocument();
  expect(countBasketTest).toHaveTextContent("3");
  expect(sumBasketTest).toBeInTheDocument();
  expect(sumBasketTest).toHaveTextContent("1850");
});
