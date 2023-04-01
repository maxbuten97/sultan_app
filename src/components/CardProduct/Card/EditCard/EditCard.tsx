import React from "react";
import s from "./EditCard.module.css";
import { IProduct } from "../../../../shared/interfaces/ProductInterface";
const bottleSVG: string = require("../../../../image/bottle.svg").default;
const shareSVG: string = require("../../../../image/share.svg").default;
const EditCard = (props: {
  editProduct: (product: IProduct) => void;
  counter: number;
  card: IProduct | undefined;
  setCard: (product: IProduct) => void;
  setEditMode: (editMode: boolean) => void;
  showAdminTools: () => JSX.Element | undefined;
  removeFromBasketCounter: () => void;
  addToBasketCounter: () => void;
}) => {
  /** Изменить цену в админ режиме */
  function editPrice(price: number) {
    if (props.card) {
      const newCard = props.card;
      newCard.price = price;
      props.setCard(newCard);
    }
  }
  /** Изменить бренд в админ режиме */
  function editBrand(brand: string) {
    if (props.card) {
      const newCard = props.card;
      newCard.brand = brand;
      props.setCard(newCard);
    }
  }

  /** Изменить производителя в админ режиме */
  function editManufacture(manufacture: string) {
    if (props.card) {
      const newCard = props.card;
      newCard.manufacture = manufacture;
      props.setCard(newCard);
    }
  }
  /** Изменить штрихкод в админ режиме */
  function editBarcode(barcode: string) {
    if (props.card) {
      const newCard = props.card;
      newCard.barcode = barcode;
      props.setCard(newCard);
    }
  }
  /** Изменить имя продукта в админ режиме */
  function editName(name: string) {
    if (props.card) {
      const newCard = props.card;
      newCard.name = name;
      props.setCard(newCard);
    }
  }

  /** Изменить описание продукта в админ режиме */
  function editDescrription(description: string) {
    if (props.card) {
      const newCard = props.card;
      newCard.description = description;
      props.setCard(newCard);
    }
  }

  return (
    <div className={s.card}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.image__block}>
            <div className={s.img_wrapper}>
              <img className={s.card__image} src={props.card?.url} alt="soap" />
            </div>
          </div>

          <div className={s.product__card}>
            {props.showAdminTools()}
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
                {props.card?.size}
                {props.card?.typeSize}
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
                  onClick={() => props.removeFromBasketCounter()}
                  className={s.down_btn}
                >
                  -
                </button>
                <div className={s.number}>{props.counter}</div>
                <button
                  onClick={() => props.addToBasketCounter()}
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
                  <img className={s.share__image} src={shareSVG} alt="share" />
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
                {props.card?.brand}
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
                      {props.card?.brand}
                    </div>
                    <div className={s.product__brand}>
                      <span className={s.gray}>Бренд:</span> {props.card?.brand}
                    </div>
                    <div className={s.product__vendor}>
                      <span className={s.gray}>Артикул:</span> 460404
                    </div>{" "}
                    <div className={s.product__quantity}>
                      <span className={s.gray}>Кол-во в коробке:</span> 2
                    </div>
                    <div className={s.product__barcode}>
                      <span className={s.gray}>Штрихкод:</span>{" "}
                      {props.card?.barcode}
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
};

export default EditCard;
