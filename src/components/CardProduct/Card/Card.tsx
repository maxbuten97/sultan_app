import React from "react";
import s from "./Card.module.css";
import cardPNG from "./../../../image/soap.png";
const boxSVG: string = require("../../../image/box.svg").default;
const shareSVG: string = require("../../../image/share.svg").default;

const Card = () => {
  return (
    <div className={s.card}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.image__block}>
            <div className={s.img_wrapper}>
              <img src={cardPNG} alt="soap" />
            </div>
          </div>
          <div className={s.product__card}>
            <div className={s.flag_stock}>В наличии</div>
            <div className={s.product__name}>
              <span className={s.strong}>BioMio BIO-SOAP</span> Экологичное
              туалетное мыло. Литсея и бергамот
            </div>
            <div className={s.product__volume}>
              <div className={s.volume__image}>
                <img src={boxSVG} alt="box" />
              </div>
              <div className={s.volume__text}>90г</div>
            </div>
            <div className={s.price__block}>
              <div className={s.price}>48,76 ₸</div>
              <div className={s.quantity}>
                <div className={s.down_btn}>-</div>
                <div className={s.number}>1</div>
                <div className={s.up_btn}>+</div>
              </div>
              <div className={s.basket__btn}>
                <div className={s.basket__text}>В корзину</div>
              </div>
            </div>
            <div className={s.network}>
              <div className={s.share}>
                <div className={s.share__wrapper}>
                  <img src={shareSVG} alt="share" />
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
                <span className={s.gray}>Производитель:</span> BioMio
              </div>
              <div className={s.product__brand}>
                <span className={s.gray}>Бренд:</span> BioMio
              </div>
              <div className={s.product__vendor}>
                <span className={s.gray}>Артикул:</span> 460404
              </div>{" "}
              <div className={s.product__quantity}>
                <span className={s.gray}>Кол-во в коробке:</span> 2
              </div>
              <div className={s.product__barcode}>
                <span className={s.gray}>Штрихкод:</span> 4604049097548
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam interdum ut justo, vestibulum sagittis iaculis iaculis.
                  Quis mattis vulputate feugiat massa vestibulum duis. Faucibus
                  consectetur aliquet sed pellentesque consequat consectetur
                  congue mauris venenatis. Nunc elit, dignissim sed nulla
                  ullamcorper enim, malesuada.
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
                      <span className={s.gray}>Назначение:</span> BioMio
                    </div>
                    <div className={s.product__brand}>
                      <span className={s.gray}>Бренд:</span> BioMio
                    </div>
                    <div className={s.product__vendor}>
                      <span className={s.gray}>Артикул:</span> 460404
                    </div>{" "}
                    <div className={s.product__quantity}>
                      <span className={s.gray}>Кол-во в коробке:</span> 2
                    </div>
                    <div className={s.product__barcode}>
                      <span className={s.gray}>Штрихкод:</span> 4604049097548
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
