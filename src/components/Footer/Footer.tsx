import React from "react";
import s from "./Footer.module.css";

const logoSVG: string = require("../../image/sultan_footer.svg").default;
const arrowSVG: string = require("../../image/arrow.svg").default;
const whatsappSVG: string = require("../../image/WA.svg").default;
const telegramSVG: string = require("../../image/TG.svg").default;
const visaSVG: string = require("../../image/Visa.svg").default;
const mastercardSVG: string = require("../../image/MasterCard.svg").default;
const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footer__row}>
          <div className={s.footer__about}>
            <div className={s.footer__title}>
              <img className={s.logo} src={logoSVG} alt="logo" />
            </div>
            <div className={s.about__text}>
              Компания «Султан» — снабжаем розничные магазины товарами "под
              ключ" в Кокчетаве и Акмолинской области
            </div>
            <div className={s.subscribe__text}>Подпишись на скидки и акции</div>
            <div className={s.email}>
              <div className={s.input__wrapper}>
                <input
                  className={s.email__input}
                  type="text"
                  placeholder="Введите ваш E-mail"
                />
              </div>
              <div className={s.image__wrapper}>
                <img className={s.email__image} src={arrowSVG} alt="search" />
              </div>
            </div>
          </div>
          <div className={s.footer__menu_wrap}>
            <div className={s.footer__menu}>
              <div className={s.footer__title}>Меню сайта:</div>
              <div className={s.footer__links}>
                <a href="/" className={s.footer__link}>
                  О компании
                </a>
                <a href="/" className={s.footer__link}>
                  Доставка и оплата
                </a>
                <a href="/" className={s.footer__link}>
                  Возврат
                </a>
                <a href="/" className={s.footer__link}>
                  Контакты
                </a>
              </div>
            </div>
            <div className={s.footer__categories}>
              <div className={s.footer__title}>Категории:</div>
              <div className={s.footer__links}>
                <a href="/" className={s.footer__link}>
                  Бытовая химия
                </a>
                <a href="/" className={s.footer__link}>
                  Косметика и гигиена
                </a>
                <a href="/" className={s.footer__link}>
                  Товары для дома
                </a>
                <a href="/" className={s.footer__link}>
                  Товары для детей и мам
                </a>
                <a href="/" className={s.footer__link}>
                  Посуда
                </a>
              </div>
            </div>
          </div>
          <div className={s.footer__download}>
            <div className={s.footer__title__price}>Скачать прайс-лист:</div>
            <div className={s.price_list}>
              <div className={s.price_list__btn}>
                <div className={s.price_list__text}>Прайс-лист</div>
              </div>
            </div>
            <div className={s.connect}>
              <div className={s.connect__text}>Связь в мессенджерах:</div>
              <div className={s.connect__img}>
                <div className={s.imgWrapper}>
                  <img className={s.social} src={whatsappSVG} alt="WA" />
                </div>
                <div className={s.imgWrapper}>
                  <img className={s.social} src={telegramSVG} alt="TG" />
                </div>
              </div>
            </div>
          </div>
          <div className={s.footer__contacts}>
            <div className={s.footer__title}>Контакты:</div>
            <div className={s.info}>
              <a className={s.tel} href="tel:+77774900091">
                +7 (777) 490-00-91
              </a>
              <div className={s.working_hours}>время работы: 9:00-20:00</div>
              <div className={s.callback}>Заказать звонок</div>
            </div>
            <div className={s.mail}>
              <div className={s.mail__text}>
                opt.sultan@mail.ru <br />
                <span className={s.mail_subtext}>На связи в любое время</span>
              </div>
            </div>
            <div className={s.payment}>
              <div className={s.payment__img}>
                <img className={s.pay} src={visaSVG} alt="visa" />
              </div>
              <div className={s.payment__img}>
                <img className={s.pay} src={mastercardSVG} alt="mastercard" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
