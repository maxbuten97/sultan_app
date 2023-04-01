import React, { ReactElement } from "react";
import "./ModalMenu.css";
const geoSVG: string = require("../../../image/geo.svg").default;
const emailSVG: string = require("../../../image/email.svg").default;
const telSVG: string = require("../../../image/tel.svg").default;
// интерфейс для пропсов
interface ModalPropsHeader {
  visible: boolean;
  footer: ReactElement | string;
  onClose: () => void;
}

const ModalMenu = ({
  visible = false,
  footer = "",
  onClose,
}: ModalPropsHeader) => {
  // создаем обработчик нажатия клавиши Esc
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  // c помощью useEffect цепляем обработчик к нажатию клавиш
  React.useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  // если компонент невидим, то не отображаем его
  if (!visible) return null;

  // или возвращаем верстку модального окна
  return (
    <div className="modal_modal_header" onClick={onClose}>
      <div
        className="modal-dialog_modal_header"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header_modal_header">
          <span className="modal-close" onClick={onClose}>
            x
          </span>
        </div>
        <div className="container_modal_header">
          <div className="modal-body_modal_header">
            <div className="modal-content_modal_header">
              <div className="adress_modal_header">
                <div className="imgWrapper_modal_header">
                  <img
                    className="adress__geoSvg_modal_header"
                    src={geoSVG}
                    alt="geo"
                  />
                </div>
                <div className="adress__text_modal_header">
                  г. Кокчетав, ул. Ж. Ташенова 129Б <br />
                  <span className="subtext_modal_header">
                    (Рынок Восточный)
                  </span>
                </div>
              </div>
              <div className="email_modal_header">
                <div className="imgWrapper_modal_header">
                  <img src={emailSVG} alt="email" />
                </div>
                <div className="email__text_modal_header">
                  opt.sultan@mail.ru <br />
                  <span className="subtext_modal_header">
                    На связи в любое время
                  </span>
                </div>
              </div>
              <div className="info_modal_header">
                <div className="info__block_modal_header">
                  <div className="adress_modal_header">
                    <div className="imgWrapper_modal_header">
                      <img
                        className="adress__geoSvg_modal_header"
                        src={telSVG}
                        alt="geo"
                      />
                    </div>
                    <div className="adress__text_modal_header">
                      Отдел продаж <br />
                      <span className="subtext_modal_header">
                        <a href="tel:+77774900091">+7 (777) 490-00-91</a>
                      </span>
                      <div className="hours_modal_header">
                        время работы: 9:00-20:00
                      </div>
                    </div>
                  </div>
                  <div className="callback__block_modal_header">
                    <div className="callback_modal_header">Заказать звонок</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line_modal_header"></div>
          {footer && (
            <div className="modal-footer_modal_header">
              <div className="footer__title_modal_header">Меню сайта:</div>
              <div className="footer__links_modal_header">
                <a href="/" className="footer__link_modal_header">
                  О компании
                </a>
                <a href="/" className="footer__link_modal_header">
                  Доставка и оплата
                </a>
                <a href="/" className="footer__link_modal_header">
                  Возврат
                </a>
                <a href="/" className="footer__link_modal_header">
                  Контакты
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="price_list">
          <div className="price_list__btn">
            <div className="price_list__text">Прайс-лист</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
