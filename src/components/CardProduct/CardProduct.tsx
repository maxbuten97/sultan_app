import React from "react";
import s from "./CardProduct.module.css";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import Card from "./Card/Card";
// import SimilarProducts from "./SimilarProducts/SimilarProducts";
// import RecentlyProducts from "./RecentlyProducts/RecentlyProducts";
import { IProduct } from "../../shared/interfaces/ProductInterface";
import { IBasketProduct } from "../../shared/interfaces/BasketProductInterface";

const CardProduct = (props: {
  isAdmin: boolean;
  storage: IProduct[];
  editProduct: (product: IProduct) => void;
  basketProducts: IBasketProduct[];
  addBasketProduct: (id: string) => void;
  setCountBasketProduct: (count: number, id: string) => void;
}) => {
  return (
    <div className={s.card__product}>
      <BreadCrumbs />
      <Card
        storage={props.storage}
        isAdmin={props.isAdmin}
        editProduct={props.editProduct}
        basketProducts={props.basketProducts}
        addBasketProduct={props.addBasketProduct}
        setCountBasketProduct={props.setCountBasketProduct}
      />
      {/* <SimilarProducts /> */}
      {/* <RecentlyProducts /> */}
    </div>
  );
};

export default CardProduct;
