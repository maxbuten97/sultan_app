import React from "react";
import s from "./Location.module.css";
const geoSVG: string = require("../../../image/geo.svg").default;
const documentSVG: string = require("../../../image/document.svg").default;
const Location = () => {
  return (
    <div className={s.location}>
      <div className={s.container}>
        <div className={s.background}>
          <div className={s.block}>
            <div className={s.information}>
              <div className={s.contacts}>
                <div className={s.title}>Контакты</div>
                <div className={s.subtitle}>Оптовый поставщик «Султан»</div>
                <div className={s.adress}>
                  <div className={s.adress__title}>Адрес:</div>
                  <div className={s.adress__body}>
                    <div className={s.imgWrapper}>
                      <img src={geoSVG} alt="geo" />
                    </div>
                    <div className={s.adress__text}>
                      г. Кокчетав, ул. Ж. Ташенова 129Б <br /> (Рынок Восточный)
                    </div>
                  </div>
                </div>
                <div className={s.line}></div>
                <div className={s.data}>
                  <div className={s.data__title}>Данные налогоплательщика:</div>
                  <div className={s.data__body}>
                    <div className={s.imgWrapper}>
                      <img src={documentSVG} alt="document" />
                    </div>
                    <div className={s.data__text}>
                      ИП Катран Д.С. <br /> ИИН: 860113450858
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.department}>
                <div className={s.department__title}>Отдел продаж:</div>
                <div className={s.department__tel}>+7 (777) 490-00-91</div>
                <div className={s.department__mail}>opt.sultan@mail.ru</div>
                <div className={s.line}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
