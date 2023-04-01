import { useEffect, useState } from "react";
import s from "./Content.module.css";
import "./Content.css";
import airWickPNG from "../../../image/airwick.png";
import masterFreshPNG from "../../../image/masterFresh.png";
import sibiarPNG from "../../../image/Sibiar.png";
import cottonClubPNG from "../../../image/cottonClub.png";
import camayPNG from "../../../image/camay.png";
import ProductItem from "../ProductItem/ProductItem";
import { IProduct } from "../../../shared/interfaces/ProductInterface";
import { ICareCategory } from "../../../shared/interfaces/CareCategoryInterface";
import ManufactureFilter from "../ManufactureFilter/ManufactureFilter";
import CareCategory from "./CareCategory/CareCategory";
import PriceFilter from "./PriceFilter/PriceFilter";
import { IBasketProduct } from "../../../shared/interfaces/BasketProductInterface";
import ReactPaginate from "react-paginate";
const basketDeleteSVG: string =
  require("../../../image/basket_delete.svg").default;

const Content = (props: {
  selectedCareCategory: string[];
  setSelectedCareCategory: (category: string[]) => void;
  storage: IProduct[];
  careCategories: ICareCategory[];
  deleteProduct: (product: IProduct) => void;
  isAdmin: boolean;
  sorted: string;
  basketProducts: IBasketProduct[];
  addBasketProduct: (id: string) => void;
  setCountBasketProduct: (count: number, id: string) => void;
}) => {
  const manufacturesSet = new Set(
    props.storage.map((product) => {
      return product.manufacture;
    })
  );
  const defaultManufactures: string[] = Array.from(
    manufacturesSet.values()
  ).sort();

  /** Пагинация */
  const [itemOffset, setItemOffset] = useState(0);
  /** Элементов на странице */
  const itemsPerPage = 9;
  let listProducts = props.storage;
  let currentItems: any[] = listProducts;
  let pageCount: number = 0;

  const [priceMinFilter, setPriceMinFilter] = useState<number>();
  const [priceMaxFilter, setPriceMaxFilter] = useState<number>();
  const [manufactureFilter, setManufactureFilter] = useState<string[]>([]);
  const [manufactures, setManufactures] =
    useState<string[]>(defaultManufactures);
  /** */
  function searchManufacture(searchText: string) {
    if (searchText === "") {
      setManufactures(defaultManufactures);
    } else {
      const newManufactures = defaultManufactures.filter((manufacture) =>
        manufacture.includes(searchText)
      );
      setManufactures(newManufactures);
    }
  }

  function changeManufactureFilter(manufacture: string) {
    if (manufactureFilter.includes(manufacture)) {
      setManufactureFilter(manufactureFilter.filter((m) => m !== manufacture));
    } else {
      setManufactureFilter([...manufactureFilter, manufacture]);
    }
  }

  useEffect(() => {
    showContent();
    getPaginateProducts();
  });

  function showContent() {
    let newProducts = props.storage;
    /**Фильтрация по выбранной категории ухода */
    if (props.selectedCareCategory.length > 0) {
      let array: IProduct[] = [];
      props.selectedCareCategory.forEach((careCategory) => {
        newProducts.forEach((product) => {
          if (product.category.includes(careCategory)) {
            if (!array.find((item) => item.id === product.id))
              array.push(product);
          }
        });
      });
      newProducts = array;
    }

    if (manufactureFilter.length > 0) {
      let array: IProduct[] = [];
      manufactureFilter.forEach((manufacture) => {
        newProducts.forEach((product) => {
          if (product.manufacture == manufacture) {
            if (!array.find((item) => item.id === product.id))
              array.push(product);
          }
        });
      });
      newProducts = array;
    }

    /**Фильтрация по минимальному значению */
    if (priceMinFilter) {
      newProducts = newProducts.filter((item) => item.price > priceMinFilter);
    }
    /**Фильтрация по максимальному значению */
    if (priceMaxFilter) {
      newProducts = newProducts.filter((item) => item.price < priceMaxFilter);
    }
    /**Сортировка от А до Я */
    if (props.sorted === "nameDesc") {
      newProducts
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => a.brand.localeCompare(b.brand));
    }
    /**Сортировка от Я до А */
    if (props.sorted === "nameAsc") {
      newProducts
        .sort((a, b) => b.name.localeCompare(a.name))
        .sort((a, b) => b.brand.localeCompare(a.brand));
    }
    /**Сортировка цены min */
    if (props.sorted === "priceDesc") {
      newProducts.sort((a, b) => a.price - b.price);
    }
    /**Сортировка цены max */
    if (props.sorted === "priceAsc") {
      newProducts.sort((a, b) => b.price - a.price);
    }

    /**Условие, если пустой массив, вернуть результат не найден */
    if (newProducts.length === 0) {
      return <div className={s.nonResult}>Результатов не найдено...</div>;
    }
    listProducts = [...newProducts];

    return getPaginateProducts();
  }

  function getPaginateProducts() {
    const endOffset = itemOffset + itemsPerPage;
    currentItems = listProducts.slice(itemOffset, endOffset);
    pageCount = Math.ceil(listProducts.length / itemsPerPage);

    return currentItems.map((item) => {
      return (
        <ProductItem
          item={item}
          key={item.id}
          deleteProduct={props.deleteProduct}
          isAdmin={props.isAdmin}
          addBasketProduct={props.addBasketProduct}
          basketProducts={props.basketProducts}
          setCountBasketProduct={props.setCountBasketProduct}
        />
      );
    });
  }

  function handlePageClick(event: any) {
    const newOffset = (event.selected * itemsPerPage) % listProducts.length;
    setItemOffset(newOffset);
  }

  return (
    <div className={s.content}>
      <div className={s.container}>
        <div className={s.column}>
          <div className={s.sidebar_filter}>
            <div className={s.sidebar__title}>Подбор по параметрам</div>
            <PriceFilter
              setPriceMinFilter={setPriceMinFilter}
              setPriceMaxFilter={setPriceMaxFilter}
            />
            <ManufactureFilter
              manufactures={manufactures}
              changeManufactureFilter={changeManufactureFilter}
              searchManufacture={searchManufacture}
            />
            <div className={s.view__buttons_block}>
              <div className={s.view__button}>Показать</div>
              <div className={s.basket__delete}>
                <img
                  className={s.basket__delete_img}
                  src={basketDeleteSVG}
                  alt="basket_delete"
                />
              </div>
            </div>
            <div className={s.categories__filter}>
              {props.careCategories.map((careCategory, index) => {
                return (
                  <CareCategory
                    careCategory={careCategory}
                    key={index}
                    selectedCareCategory={props.selectedCareCategory}
                    setSelectedCareCategory={props.setSelectedCareCategory}
                  />
                );
              })}
            </div>
            <div className={s.line}></div>
            <div className={s.brands}>
              <div className={s.brands__title}>Бренды</div>
              <div className={s.brands__list}>
                <div className={s.brands__item}>
                  <div className={s.imgWrapper}>
                    <img
                      className={s.image}
                      src={airWickPNG}
                      alt="categories"
                    />
                  </div>
                </div>
                <div className={s.brands__item}>
                  <div className={s.imgWrapper}>
                    <img
                      className={s.image}
                      src={masterFreshPNG}
                      alt="categories"
                    />
                  </div>
                </div>
                <div className={s.brands__item}>
                  <div className={s.imgWrapper}>
                    <img className={s.image} src={sibiarPNG} alt="categories" />
                  </div>
                </div>
                <div className={s.brands__item}>
                  <div className={s.imgWrapper}>
                    <img
                      className={s.image}
                      src={cottonClubPNG}
                      alt="categories"
                    />
                  </div>
                </div>
                <div className={s.brands__item}>
                  <div className={s.imgWrapper}>
                    <img className={s.image} src={camayPNG} alt="categories" />
                  </div>
                </div>
              </div>
              <div className={s.view}>Показать все</div>
            </div>
          </div>

          <div className={s.product__list}>
            {showContent()}

            <div className={s.pagination__block}>
              <ReactPaginate
                className={s.paginator}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="previous-link"
                nextClassName="page-item"
                nextLinkClassName="next-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                nextLabel=">"
                onPageChange={(e) => handlePageClick(e)}
                pageRangeDisplayed={itemsPerPage}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={() => null}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
