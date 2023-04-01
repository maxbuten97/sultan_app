import React, { ReactElement } from "react";
import "./Modal.css";
const checkSVG: string = require("../../../image/check_mark.svg").default;
// интерфейс для пропсов
interface ModalProps {
  visible: boolean;
  footer: ReactElement | string;
  onClose: () => void;
}

const Modal = ({ visible = false, footer = "", onClose }: ModalProps) => {
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
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="img__wrapper">
            <img className="check__image" src={checkSVG} alt="check" />
          </div>
          <div className="modal-content">Спасибо за заказ</div>
        </div>
        {footer && (
          <div className="modal-footer">
            Наш менеджер свяжется с вами в ближайшее время
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
