import React, { useState } from "react";
import s from "./Card.module.css";
import { IProduct } from "../../../shared/interfaces/ProductInterface";
import { useParams } from "react-router-dom";
import { IBasketProduct } from "../../../shared/interfaces/BasketProductInterface";
import EditCard from "./EditCard/EditCard";
const bottleSVG: string = require("../../../image/bottle.svg").default;
const shareSVG: string = require("../../../image/share.svg").default;

const Card = (props: {
  isAdmin: boolean;
  storage: IProduct[];
  editProduct: (product: IProduct) => void;
  basketProducts: IBasketProduct[];
  addBasketProduct: (id: string) => void;
  setCountBasketProduct: (count: number, id: string) => void;
}) => {
  const { id } = useParams();
  const [card, setCard] = useState<IProduct | undefined>(() => {
    return props.storage.find((item) => item.id === id);
  });

  const basketProduct = props.basketProducts.find(
    (x) => x.product?.id === card?.id
  );
  let [counter, setCounter] = useState<number>(() => {
    if (basketProduct) {
      return basketProduct.count;
    }
    return 1;
  });

  const [editMode, setEditMode] = useState<boolean>(false);

  /** Изменение количества товара минус*/
  function removeFromBasketCounter() {
    if (basketProduct) {
      let product = basketProduct.product;
      if (counter === 1) {
        props.setCountBasketProduct(-1, product.id);
        return;
      }
      if (counter > 1) {
        setCounter(counter - 1);
        props.setCountBasketProduct(-1, product.id);
      }
    }
  }
  /** Изменение количества товара плюс*/
  function addToBasketCounter() {
    if (basketProduct) {
      let product = basketProduct.product;
      if (counter === 0) {
        setCounter(1);
      }
      if (basketProduct) {
        setCounter(basketProduct?.count + 1);
      }
      props.setCountBasketProduct(1, product.id);
    }
  }
  /**Показать админ-панель */
  function showAdminTools() {
    if (props.isAdmin) {
      return (
        <div className={s.admin__buttons}>
          <button
            className={s.edit__button}
            onClick={() => setEditMode(!editMode)}
          >
            Редактировать
          </button>
          <button className={s.save__button} onClick={() => saveProduct()}>
            Сохранить
          </button>
        </div>
      );
    }
  }
  /** Функция показа карточки в пользовательском режиме */
  function showCard() {
    if (props.isAdmin && editMode) {
      return showEditedCard();
    }
    /**Добавить продукт в корзину */
    function addProductToBasket() {
      if (card) {
        props.addBasketProduct(card.id);
      }
    }

    return (
      <div className={s.card}>
        <div className={s.container}>
          <div className={s.row}>
            <div className={s.image__block}>
              <div className={s.img_wrapper}>
                <img className={s.card__image} src={card?.url} alt="soap" />
              </div>
            </div>
            <div className={s.product__card}>
              {showAdminTools()}
              <div className={s.flag_stock}>В наличии</div>
              <div className={s.product__name}>
                <span className={s.strong}>{card?.brand}</span> {card?.name}
              </div>
              <div className={s.product__volume}>
                <div className={s.volume__image}>
                  <img className={s.bottle} src={bottleSVG} alt="bottle" />
                </div>
                <div className={s.volume__text}>
                  {card?.size}
                  {card?.typeSize}
                </div>
              </div>
              <div className={s.price__block}>
                <div className={s.price}>{card?.price} ₸</div>
                <div className={s.quantity}>
                  <button
                    onClick={() => removeFromBasketCounter()}
                    className={s.down_btn}
                  >
                    -
                  </button>
                  <div className={s.number}>{counter}</div>
                  <button
                    onClick={() => addToBasketCounter()}
                    className={s.up_btn}
                  >
                    +
                  </button>
                </div>
                <div className={s.basket__btn}>
                  <div
                    className={s.basket__text}
                    onClick={() => addProductToBasket()}
                  >
                    В корзину
                  </div>
                </div>
              </div>
              <div className={s.network}>
                <div className={s.share}>
                  <div className={s.share__wrapper}>
                    <img
                      className={s.share__image}
                      src={shareSVG}
                      alt="share"
                    />
                  </div>
                </div>
                <div className={s.delivery}>
                  При покупке от <span className={s.strong}>10 000 ₸</span>{" "}
                  бесплатная <br /> доставка по Кокчетаву и области
                </div>
                <div className={s.price_list}>Прайс-лист</div>
              </div>

              <div className={s.characteries__block}>
                <div className={s.product__manufacturer}>
                  <span className={s.gray}>Производитель:</span>
                  {card?.manufacture}
                </div>
                <div className={s.product__brand}>
                  <span className={s.gray}>Бренд:</span> {card?.brand}
                </div>
                <div className={s.product__vendor}>
                  <span className={s.gray}>Артикул:</span> 460404
                </div>
                <div className={s.product__quantity}>
                  <span className={s.gray}>Кол-во в коробке:</span> 2
                </div>
                <div className={s.product__barcode}>
                  <span className={s.gray}>Штрихкод:</span> {card?.barcode}
                </div>
                <div className={s.product__size_box}>
                  <span className={s.gray}>
                    Размеры коробки<span className={s.small}>(д*ш*в)</span>:
                  </span>
                  10x10x10
                </div>
                <div className={s.product__weight_box}>
                  <span className={s.gray}>Вес коробки:</span> 1020г
                </div>
              </div>

              <div className={s.description__block}>
                <div id="descr" className={s.menu}>
                  <span className={s.title}>Описание</span>
                  <div className={s.description__text}>{card?.description}</div>
                </div>
              </div>
              <div className={s.line}></div>
              <div className={s.characteries__block__hidden}>
                <div id="descr" className={s.menu}>
                  <span className={s.title}>Характеристики</span>
                  <div className={s.characteries__text}>
                    <div className={s.characteries__block2}>
                      <div className={s.product__manufacturer}>
                        <span className={s.gray}>Назначение:</span>{" "}
                        {card?.brand}
                      </div>
                      <div className={s.product__brand}>
                        <span className={s.gray}>Бренд:</span> {card?.brand}
                      </div>
                      <div className={s.product__vendor}>
                        <span className={s.gray}>Артикул:</span> 460404
                      </div>
                      <div className={s.product__quantity}>
                        <span className={s.gray}>Кол-во в коробке:</span> 2
                      </div>
                      <div className={s.product__barcode}>
                        <span className={s.gray}>Штрихкод:</span>
                        {card?.barcode}
                      </div>
                      <div className={s.product__size_box}>
                        <span className={s.gray}>
                          Размеры коробки
                          <span className={s.small}>(д*ш*в)</span>:
                        </span>
                        10x10x10
                      </div>
                      <div className={s.product__weight_box}>
                        <span className={s.gray}>Вес коробки:</span> 1020г
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /** Сохранить изменения в админ режиме */
  function saveProduct() {
    if (card) {
      props.editProduct(card);
    }
    setEditMode(false);
  }
  /** Функция показа карточки в админ режиме */
  function showEditedCard() {
    return (
      <EditCard
        card={card}
        setCard={setCard}
        counter={counter}
        editProduct={props.editProduct}
        setEditMode={setEditMode}
        showAdminTools={showAdminTools}
        removeFromBasketCounter={removeFromBasketCounter}
        addToBasketCounter={addToBasketCounter}
      />
    );
  }
  return <div>{showCard()}</div>;
};

export default Card;
