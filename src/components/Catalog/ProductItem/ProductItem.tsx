import { useState } from "react";
import s from "./ProductItem.module.css";
import { NavLink } from "react-router-dom";
import { IProduct } from "../../../shared/interfaces/ProductInterface";
import { IBasketProduct } from "../../../shared/interfaces/BasketProductInterface";
import ProductSizeInfo from "../../../shared/components/ProductSizeInfo/ProductSizeInfo";
import ProductCharacteristics from "../../../shared/components/ProductCharacteristics/ProductCharacteristics";
import ProductImage from "../../../shared/components/ProductImage/ProductImage";

const ProductItem = (props: {
  item: IProduct;
  deleteProduct: (listProducts: IProduct) => void;
  isAdmin: boolean;
  addBasketProduct: (id: string) => void;
  basketProducts: IBasketProduct[];
  setCountBasketProduct: (count: number, id: string) => void;
}) => {
  const item = props.item;
  const basketProduct = props.basketProducts.find(
    (x) => x.product?.id === item.id
  );
  let [counter, setCounter] = useState<number>(() => {
    if (basketProduct) {
      return basketProduct.count;
    }
    return 1;
  });

  function getAdminTools() {
    if (props.isAdmin) {
      return (
        <button className={s.delete} onClick={() => props.deleteProduct(item)}>
          ❌
        </button>
      );
    } else {
      return;
    }
  }

  function removeFromBasketCounter() {
    if (counter === 1) {
      props.setCountBasketProduct(-1, item.id);
      return;
    }
    if (counter > 1) {
      setCounter(counter - 1);
      props.setCountBasketProduct(-1, item.id);
    }
  }

  function addToBasketCounter() {
    if (counter === 0) {
      setCounter(1);
    }
    if (basketProduct) {
      setCounter(basketProduct?.count + 1);
    }
    props.setCountBasketProduct(1, item.id);
  }

  function getAddToBasket() {
    const findedProductBasket = props.basketProducts.find(
      (basketProduct) => basketProduct.product?.id === item.id
    );
    if (findedProductBasket) {
      return (
        <div className={s.quantity}>
          <button
            onClick={() => removeFromBasketCounter()}
            className={s.down_btn}
          >
            -
          </button>
          <div className={s.number}>{counter}</div>
          <button onClick={() => addToBasketCounter()} className={s.up_btn}>
            +
          </button>
        </div>
      );
    }
    return (
      <div
        className={s.product__btn}
        onClick={() => props.addBasketProduct(item.id)}
      >
        В корзину
      </div>
    );
  }

  return (
    <div>
      <div className={s.list__item}>
        {getAdminTools()}
        <ProductImage url={item.url} />
        <div className={s.product__info}>
          <ProductSizeInfo size={item.size} typeSize={item.typeSize} />
          {/* Когда перейдём на отоборажение массива сделать переход по айдишнику */}
          <NavLink to={`/card-product/${item.id}`}>
            <div className={s.product__name}>
              <span className={s.strong}>{item.brand}</span> {item.name}
            </div>
          </NavLink>
          <ProductCharacteristics barcode={item.barcode} manufacture={item.manufacture} brand={item.brand} />
          <div className={s.product__price_block}>
            <div className={s.product__price}>{item.price} ₸</div>
            {getAddToBasket()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
