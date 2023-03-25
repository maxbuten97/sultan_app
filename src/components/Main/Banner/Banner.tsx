import React from "react";
import s from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={s.banner}>
      <div className={s.mask}>
        <div className={s.bluredBackground}></div>
      </div>
      <div className={s.container}>
        <div className={s.banner__column}>
          <div className={s.body}>
            <h1 className={s.title}>
              Бытовая химия, косметика <br /> и хозтовары
            </h1>
            <h2 className={s.subtitle}>оптом по кокчетаву и области</h2>
          </div>
          <div className={s.catalog}>
            <div className={s.catalog__btn}>
              <div className={s.catalog__text}>В Каталог</div>
            </div>
          </div>
          <div className={s.advantages}>
            <div className={s.advantages__block}>
              <div className={s.advantages__plus}>+</div>
              <div className={s.advantages__text}>
                Только самые <br /> выгодные предложения
              </div>
            </div>
            <div className={s.advantages__block}>
              <div className={s.advantages__plus}>+</div>
              <div className={s.advantages__text}>
                Бесплатная доставка <br /> по
                <span className={s.delivery}> Кокчетаву от 10 тыс ₸</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
