import React from "react";
import s from "./Brands.module.css";
import airWickPNG from "../../../image/airwick.png";
import masterFreshPNG from "../../../image/masterFresh.png";
import sibiarPNG from "../../../image/Sibiar.png";
import cottonClubPNG from "../../../image/cottonClub.png";
import camayPNG from "../../../image/camay.png";
import jonsonsPNG from "../../../image/jonsons.png";
import colgatePNG from "../../../image/colgate.png";
import niveaPNG from "../../../image/nivea.png";
import nevskayaPNG from "../../../image/nevskaya.png";
import nefisPNG from "../../../image/nefis.png";

const Brands = () => {
  return (
    <div className={s.brands}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.title}>
            <span className={s.text}>Лучшие</span> Товары
          </div>
          <div className={s.subtitle}>
            От ведущих мировых брендов
          </div>
          <div className={s.list}>
            <div className={s.item}>
              <div className={s.imgWrapper}>
                <img className={s.image} src={airWickPNG} alt="categories" />
              </div>
            </div>
            <div className={s.item}>
              <div className={s.imgWrapper}>
                <img
                  className={s.image}
                  src={masterFreshPNG}
                  alt="categories"
                />
              </div>
            </div>
            <div className={s.item}>
              <div className={s.imgWrapper}>
                <img className={s.image} src={sibiarPNG} alt="categories" />
              </div>
            </div>
            <div className={s.item}>
              <div className={s.imgWrapper}>
                <img className={s.image} src={cottonClubPNG} alt="categories" />
              </div>
            </div>
            <div className={s.item}>
              <div className={s.imgWrapper}>
                <img className={s.image} src={camayPNG} alt="categories" />
              </div>
            </div>
            <div className={s.item}>
              <div className={s.imgWrapper}>
                <img className={s.image} src={jonsonsPNG} alt="categories" />
              </div>
            </div>
            <div className={s.item}>
              <div className={s.imgWrapper}>
                <img className={s.image} src={colgatePNG} alt="categories" />
              </div>
            </div>
            <div className={s.item}>
              <div className={s.imgWrapper}>
                <img className={s.image} src={niveaPNG} alt="categories" />
              </div>
            </div>
            <div className={s.item}>
              <div className={s.imgWrapper}>
                <img className={s.image} src={nevskayaPNG} alt="categories" />
              </div>
            </div>
            <div className={s.item}>
              <div className={s.imgWrapper}>
                <img className={s.image} src={nefisPNG} alt="categories" />
              </div>
            </div>
          </div>
          <div className={s.slider}>
            <div className={s.rectangle_active}></div>
            <div className={s.rectangle}></div>
            <div className={s.rectangle}></div>
            <div className={s.rectangle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
