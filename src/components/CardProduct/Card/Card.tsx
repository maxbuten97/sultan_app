import React, { useEffect, useState } from "react";
import s from "./Card.module.css";
import { IProduct } from "../../../shared/interfaces/ProductInterface";
import { useParams } from "react-router-dom";
const bottleSVG: string = require("../../../image/bottle.svg").default;
const shareSVG: string = require("../../../image/share.svg").default;

const Card = (props: {
  isAdmin: boolean;
  storage: IProduct[];
  editProduct: (product: IProduct) => void;
}) => {
  const [card, setCard] = useState<IProduct>();
  let [counter, setCounter] = useState<number>(0);
  const { id } = useParams();

  useEffect(() => {
    const productCard = props.storage.find((item) => item.id === id);
    setCard(productCard!);
  });

  /** Функция показа карточки в пользовательском режиме */
  function showCard() {
    if (props.isAdmin) {
      return showEditedCard();
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
                    onClick={() => setCounter(counter + 1)}
                    className={s.up_btn}
                  >
                    +
                  </button>
                </div>
                <div className={s.basket__btn}>
                  <div className={s.basket__text}>В корзину</div>
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
  /** Изменение количества товара */
  function removeFromBasketCounter() {
    if (counter <= 0) {
      return setCounter(0);
    }
    setCounter(counter - 1);
  }

  /** Изменить цену в админ режиме */
  function editPrice(price: number) {
    if (card) {
      const newCard = card;
      newCard.price = price;
      setCard(newCard);
    }
  }
  /** Изменить бренд в админ режиме */
  function editBrand(brand: string) {
    if (card) {
      const newCard = card;
      newCard.brand = brand;
      setCard(newCard);
    }
  }
  /** Изменить производителя в админ режиме */
  function editManufacture(manufacture: string) {
    if (card) {
      const newCard = card;
      newCard.manufacture = manufacture;
      setCard(newCard);
    }
  }
  /** Изменить штрихкод в админ режиме */
  function editBarcode(barcode: string) {
    if (card) {
      const newCard = card;
      newCard.barcode = barcode;
      setCard(newCard);
    }
  }
  /** Изменить имя продукта в админ режиме */
  function editName(name: string) {
    if (card) {
      const newCard = card;
      newCard.name = name;
      setCard(newCard);
    }
  }

    /** Изменить описание продукта в админ режиме */
    function editDescrription(description: string) {
      if (card) {
        const newCard = card;
        newCard.description = description;
        setCard(newCard);
      }
    }

  /** Сохранить изменения в админ режиме */
  function saveProduct() {
    if (card) {
      props.editProduct(card);
    }
  }
  /** Функция показа карточки в админ режиме */
  function showEditedCard() {
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
              <div className={s.admin__buttons}>
                <button className={s.edit__button}>Редактировать</button>
                <button
                  className={s.save__button}
                  onClick={() => saveProduct()}
                >
                  Сохранить
                </button>
              </div>
              <div className={s.flag_stock}>В наличии</div>
              <div className={s.product__name}>
                <span className={s.strong}>
                  <input
                  className={s.input__admin}
                  placeholder="Бренд"
                    type="text"
                    onInput={(event: React.FormEvent<HTMLInputElement>) =>
                      editBrand((event.target as HTMLInputElement).value)
                    }
                  />
                </span>
                <input
                className={s.input__admin}
                placeholder="Наименование"
                  type="text"
                  onInput={(event: React.FormEvent<HTMLInputElement>) =>
                    editName((event.target as HTMLInputElement).value)
                  }
                />
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
                <input
                placeholder="Цена"
                  type="number"
                  min="0"
                  className={s.input__admin}
                  onInput={(event: React.FormEvent<HTMLInputElement>) =>
                    editPrice(+(event.target as HTMLInputElement).value)
                  }
                />
                <div className={s.quantity}>
                  <button
                    onClick={() => removeFromBasketCounter()}
                    className={s.down_btn}
                  >
                    -
                  </button>
                  <div className={s.number}>{counter}</div>
                  <button
                    onClick={() => setCounter(counter + 1)}
                    className={s.up_btn}
                  >
                    +
                  </button>
                </div>
                <div className={s.basket__btn}>
                  <div className={s.basket__text}>В корзину</div>
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
                  <input
                  placeholder="Производитель"
                    type="text"
                    className={s.input__admin}
                    onInput={(event: React.FormEvent<HTMLInputElement>) =>
                      editManufacture((event.target as HTMLInputElement).value)
                    }
                  />
                </div>
                <div className={s.product__brand}>
                  <span className={s.gray}>Бренд:</span>
                  {card?.brand}
                </div>
                <div className={s.product__vendor}>
                  <span className={s.gray}>Артикул:</span> 460404
                </div>{" "}
                <div className={s.product__quantity}>
                  <span className={s.gray}>Кол-во в коробке:</span> 2
                </div>
                <div className={s.product__barcode}>
                  <span className={s.gray}>Штрихкод:</span>{" "}
                  <input
                  placeholder="Баркод"
                    type="number"
                    className={s.input__admin}
                    onInput={(event: React.FormEvent<HTMLInputElement>) =>
                      editBarcode((event.target as HTMLInputElement).value)
                    }
                  />
                </div>
                <div className={s.product__size_box}>
                  <span className={s.gray}>
                    Размеры коробки<span className={s.small}>(д*ш*в)</span>:
                  </span>{" "}
                  10x10x10
                </div>
                <div className={s.product__weight_box}>
                  <span className={s.gray}>Вес коробки:</span> 1020г
                </div>
              </div>

              <div className={s.description__block}>
                <div id="descr" className={s.menu}>
                  <span className={s.title}>Описание</span>
                  <div className={s.description__text}>
                  <input
                  placeholder="Описание"
                    type="text"
                    className={s.input__admin}
                    onInput={(event: React.FormEvent<HTMLInputElement>) =>
                      editDescrription((event.target as HTMLInputElement).value)
                    }
                  />
                    </div>
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
                      </div>{" "}
                      <div className={s.product__quantity}>
                        <span className={s.gray}>Кол-во в коробке:</span> 2
                      </div>
                      <div className={s.product__barcode}>
                        <span className={s.gray}>Штрихкод:</span>{" "}
                        {card?.barcode}
                      </div>
                      <div className={s.product__size_box}>
                        <span className={s.gray}>
                          Размеры коробки
                          <span className={s.small}>(д*ш*в)</span>:
                        </span>{" "}
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
  return <div>{showCard()}</div>;
};

export default Card;
