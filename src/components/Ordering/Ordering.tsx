import React, { useState } from "react";
import s from "./Ordering.module.css";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import Modal from "./Modal/Modal";
import { IBasketProduct } from "../../shared/interfaces/BasketProductInterface";
import { NavLink, useNavigate } from "react-router-dom";
import OrderingBasketProduct from "./OrderingBasketProduct/OrderingBasketProduct";

const paymentSVG: string = require("../../image/wallet.svg").default;
const deliverySVG: string = require("../../image/delivery.svg").default;

const Ordering = (props: {
  basketProducts: IBasketProduct[];
  clearBasket: () => void;
}) => {
  const [isModal, setModal] = useState(false);
  const navigate = useNavigate();
  const onClose = () => {
    setModal(false);
    props.clearBasket();
    navigate("/sultan_app");
  };

  function getTotalSumBasket() {
    return props.basketProducts.reduce(
      (sum, current) => current.totalSum + sum,
      0
    );
  }

  return (
    <div className={s.ordering}>
      <div className={s.container}>
        <BreadCrumbs />
        <div className={s.ordering__title}>Оформление заказа</div>
        <div className={s.ordering__columns}>
          <div className={s.column_1}>
            <div className={s.contacts__details}>
              <div className={s.contacts__details_title}>
                <span className={s.circle}>1</span> Контактные данные
              </div>
              <div className={s.input__block}>
                <div className={s.input__title}>Имя*</div>
                <input
                  className={s.input}
                  type="text"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div className={s.input__block}>
                <div className={s.input__title}>Телефон*</div>
                <input
                  className={s.input}
                  type="text"
                  placeholder="Введите ваш телефон"
                />
              </div>
              <div className={s.input__block}>
                <div className={s.input__title}>E-mail*</div>
                <input
                  className={s.input}
                  type="text"
                  placeholder="Введите ваш E-mail"
                />
              </div>
              <div className={s.input__block}>
                <div className={s.input__title}>Название организации*</div>
                <input
                  className={s.input}
                  type="text"
                  placeholder="Введите название организации"
                />
              </div>
            </div>
            <div className={s.delivery__address}>
              <div className={s.delivery__address_title}>
                <span className={s.circle}>2</span> Адрес доставки
              </div>
              <div className={s.input__block}>
                <div className={s.input__title}>Город</div>
                <input
                  className={s.input}
                  type="text"
                  placeholder="Введите ваш город"
                />
              </div>
              <div className={s.input__block}>
                <div className={s.input__title}>Адрес</div>
                <input
                  className={s.input}
                  type="text"
                  placeholder="Введите адрес доставки"
                />
              </div>
              <div className={s.address__btn_block}>
                {/* <!-- Модальное окно -->     */}
                <React.Fragment>
                  <button
                    className={s.confirm__btn}
                    onClick={() => setModal(true)}
                  >
                    Подтверждение заказа
                  </button>
                  <Modal
                    visible={isModal}
                    footer={<button onClick={onClose}>Закрыть</button>}
                    onClose={onClose}
                  />
                </React.Fragment>
              </div>
            </div>
          </div>
          <div className={s.column_2}>
            <div className={s.info__cards}>
              <div className={s.info__cards__list}>
                <div className={s.info__cards__item}>
                  <div className={s.info__cards__content}>
                    <div className={s.info__cards__title}>
                      {" "}
                      <span className={s.payment}>
                        <img
                          className={s.payment__img}
                          src={paymentSVG}
                          alt="payment"
                        />
                      </span>{" "}
                      Оплата
                    </div>
                    <div className={s.info__cards__text}>
                      Принимаем оплату наличными, по карте и через расчётный
                      счет.
                    </div>
                  </div>
                </div>
                <div className={s.info__cards__item}>
                  <div className={s.info__cards__content}>
                    <div className={s.info__cards__title}>
                      <span className={s.delivery}>
                        <img
                          className={s.delivery__img}
                          src={deliverySVG}
                          alt="delivery"
                        />
                      </span>
                      Доставка
                    </div>
                    <div className={s.info__cards__text}>
                      Бесплатная доставка от{" "}
                      <span className={s.strong}>10 000 ₸</span> <br /> по
                      области. Наша доставка работает ежедневно.
                    </div>
                  </div>
                </div>
                <div className={s.info__cards__item}>
                  <div className={s.info__cards__content}>
                    <div className={s.info__cards__title}>
                      <span className={s.question}>?</span> Возникли вопросы?
                    </div>
                    <div className={s.info__cards__text}>
                      Звоните:{" "}
                      <span className={s.strong}>+7 777 490 00 91</span>
                      <br />
                      Менеджер Вам ответит на все вопросы.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.comments__block}>
              <div className={s.comment}>
                <div className={s.comment_title}>
                  <span className={s.circle}>3</span> Дополнительно
                </div>
                <div className={s.textarea__block}>
                  <div className={s.textarea__title}>Комментарий</div>
                  <textarea
                    className={s.textarea}
                    placeholder="Введите ваш комментарий"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={s.column_3}>
            <div className={s.order}>
              <div className={s.order__title}>Ваш заказ</div>
              <div className={s.order__list}>
                {props.basketProducts.map((basketProduct, index) => {
                  let product = basketProduct.product;
                  if (product) {
                    return (
                      <OrderingBasketProduct
                        basketProduct={basketProduct}
                        key={index}
                      />
                    );
                  }
                })}
              </div>

              <div className={s.total__block}>
                <div className={s.total__text}>Итого</div>
                <div className={s.total__sum}>{getTotalSumBasket()} ₸</div>
                {/* мобильная */}
                <button className={s.total__btn__mob}></button>
              </div>
              <NavLink to={"/basket"}>
                <div className={s.total__btn_block}>
                  <button className={s.total__btn}>Редактировать заказ</button>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordering;
