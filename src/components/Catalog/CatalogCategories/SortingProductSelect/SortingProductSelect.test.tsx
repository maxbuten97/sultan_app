import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SortingProductSelect from "./SortingProductSelect";

test("-> успешное получение и отображение приветствия", function () {
  let sortedMain = "";
  const sortedNameAsc = "nameAsc";
  const setSorted = (sorted: string) => {
    sortedMain = sorted;
  };
  render(<SortingProductSelect sorted={sortedMain} setSorted={setSorted} />);
  let select = screen.getByTestId("select1") as HTMLSelectElement;
  fireEvent.change(select, { target: { value: sortedNameAsc } });

  let label = screen.getByTestId("label-sort");
  expect(label).toBeInTheDocument();
  expect(select).toBeInTheDocument();
  expect(sortedMain).toEqual(sortedNameAsc);
  expect(select.value).toEqual(sortedNameAsc)
});
