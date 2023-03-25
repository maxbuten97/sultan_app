import React from "react";
import s from "./PromotionProducts.module.css";
import productPNG from "../../../image/product.png";

const bottleSVG: string = require("../../../image/bottle.svg").default;
const Promotion = () => {
  return (
    <div className={s.promotion}>
      <div className={s.container}>
        <div className={s.promotion__title}>
          <span className={s.promotion__text}>Акционные</span> Товары
        </div>
        <div className={s.product__list}>
          <div className={s.list__item}>
            <div className={s.popular}>Популярное</div>
            <div className={s.imgWrapper_product}>
              <img
                className={s.product__image}
                src={productPNG}
                alt="product"
              />
            </div>
            <div className={s.product__info}>
              <div className={s.product__size}>
                <div className={s.imgWrapper_bottle}>
                  <img
                    className={s.size__image}
                    src={bottleSVG}
                    alt="product"
                  />
                </div>
                <div className={s.size__text}>450 мл</div>
              </div>
              <div className={s.product__name}>
                <span className={s.strong}>AOS</span> Ср-во для мытья посуды
                Апельсин+мята
              </div>
              <div className={s.product__characteristics}>
                <div className={s.product__barcode}>
                  <span className={s.gray}>Штрихкод:</span> 4604049097548
                </div>
                <div className={s.product__manufacturer}>
                  <span className={s.gray}>Производитель:</span> Нэфис
                </div>
                <div className={s.product__brand}>
                  <span className={s.gray}>Бренд:</span> AOS
                </div>
              </div>
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>
          {/* 7 бесполезных карточек */}

          <div className={s.list__item}>
            <div className={s.popular}>Популярное</div>
            <div className={s.imgWrapper_product}>
              <img
                className={s.product__image}
                src={productPNG}
                alt="product"
              />
            </div>
            <div className={s.product__info}>
              <div className={s.product__size}>
                <div className={s.imgWrapper_bottle}>
                  <img
                    className={s.size__image}
                    src={bottleSVG}
                    alt="product"
                  />
                </div>
                <div className={s.size__text}>450 мл</div>
              </div>
              <div className={s.product__name}>
                <span className={s.strong}>AOS</span> Ср-во для мытья посуды
                Апельсин+мята
              </div>
              <div className={s.product__characteristics}>
                <div className={s.product__barcode}>
                  <span className={s.gray}>Штрихкод:</span> 4604049097548
                </div>
                <div className={s.product__manufacturer}>
                  <span className={s.gray}>Производитель:</span> Нэфис
                </div>
                <div className={s.product__brand}>
                  <span className={s.gray}>Бренд:</span> AOS
                </div>
              </div>
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>{" "}
          <div className={s.list__item}>
            <div className={s.popular}>Популярное</div>
            <div className={s.imgWrapper_product}>
              <img
                className={s.product__image}
                src={productPNG}
                alt="product"
              />
            </div>
            <div className={s.product__info}>
              <div className={s.product__size}>
                <div className={s.imgWrapper_bottle}>
                  <img
                    className={s.size__image}
                    src={bottleSVG}
                    alt="product"
                  />
                </div>
                <div className={s.size__text}>450 мл</div>
              </div>
              <div className={s.product__name}>
                <span className={s.strong}>AOS</span> Ср-во для мытья посуды
                Апельсин+мята
              </div>
              <div className={s.product__characteristics}>
                <div className={s.product__barcode}>
                  <span className={s.gray}>Штрихкод:</span> 4604049097548
                </div>
                <div className={s.product__manufacturer}>
                  <span className={s.gray}>Производитель:</span> Нэфис
                </div>
                <div className={s.product__brand}>
                  <span className={s.gray}>Бренд:</span> AOS
                </div>
              </div>
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>{" "}
          <div className={s.list__item}>
            <div className={s.popular}>Популярное</div>
            <div className={s.imgWrapper_product}>
              <img
                className={s.product__image}
                src={productPNG}
                alt="product"
              />
            </div>
            <div className={s.product__info}>
              <div className={s.product__size}>
                <div className={s.imgWrapper_bottle}>
                  <img
                    className={s.size__image}
                    src={bottleSVG}
                    alt="product"
                  />
                </div>
                <div className={s.size__text}>450 мл</div>
              </div>
              <div className={s.product__name}>
                <span className={s.strong}>AOS</span> Ср-во для мытья посуды
                Апельсин+мята
              </div>
              <div className={s.product__characteristics}>
                <div className={s.product__barcode}>
                  <span className={s.gray}>Штрихкод:</span> 4604049097548
                </div>
                <div className={s.product__manufacturer}>
                  <span className={s.gray}>Производитель:</span> Нэфис
                </div>
                <div className={s.product__brand}>
                  <span className={s.gray}>Бренд:</span> AOS
                </div>
              </div>
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>{" "}
          <div className={s.list__item}>
            <div className={s.popular}>Популярное</div>
            <div className={s.imgWrapper_product}>
              <img
                className={s.product__image}
                src={productPNG}
                alt="product"
              />
            </div>
            <div className={s.product__info}>
              <div className={s.product__size}>
                <div className={s.imgWrapper_bottle}>
                  <img
                    className={s.size__image}
                    src={bottleSVG}
                    alt="product"
                  />
                </div>
                <div className={s.size__text}>450 мл</div>
              </div>
              <div className={s.product__name}>
                <span className={s.strong}>AOS</span> Ср-во для мытья посуды
                Апельсин+мята
              </div>
              <div className={s.product__characteristics}>
                <div className={s.product__barcode}>
                  <span className={s.gray}>Штрихкод:</span> 4604049097548
                </div>
                <div className={s.product__manufacturer}>
                  <span className={s.gray}>Производитель:</span> Нэфис
                </div>
                <div className={s.product__brand}>
                  <span className={s.gray}>Бренд:</span> AOS
                </div>
              </div>
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>{" "}
          <div className={s.list__item}>
            <div className={s.popular}>Популярное</div>
            <div className={s.imgWrapper_product}>
              <img
                className={s.product__image}
                src={productPNG}
                alt="product"
              />
            </div>
            <div className={s.product__info}>
              <div className={s.product__size}>
                <div className={s.imgWrapper_bottle}>
                  <img
                    className={s.size__image}
                    src={bottleSVG}
                    alt="product"
                  />
                </div>
                <div className={s.size__text}>450 мл</div>
              </div>
              <div className={s.product__name}>
                <span className={s.strong}>AOS</span> Ср-во для мытья посуды
                Апельсин+мята
              </div>
              <div className={s.product__characteristics}>
                <div className={s.product__barcode}>
                  <span className={s.gray}>Штрихкод:</span> 4604049097548
                </div>
                <div className={s.product__manufacturer}>
                  <span className={s.gray}>Производитель:</span> Нэфис
                </div>
                <div className={s.product__brand}>
                  <span className={s.gray}>Бренд:</span> AOS
                </div>
              </div>
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>{" "}
          <div className={s.list__item}>
            <div className={s.popular}>Популярное</div>
            <div className={s.imgWrapper_product}>
              <img
                className={s.product__image}
                src={productPNG}
                alt="product"
              />
            </div>
            <div className={s.product__info}>
              <div className={s.product__size}>
                <div className={s.imgWrapper_bottle}>
                  <img
                    className={s.size__image}
                    src={bottleSVG}
                    alt="product"
                  />
                </div>
                <div className={s.size__text}>450 мл</div>
              </div>
              <div className={s.product__name}>
                <span className={s.strong}>AOS</span> Ср-во для мытья посуды
                Апельсин+мята
              </div>
              <div className={s.product__characteristics}>
                <div className={s.product__barcode}>
                  <span className={s.gray}>Штрихкод:</span> 4604049097548
                </div>
                <div className={s.product__manufacturer}>
                  <span className={s.gray}>Производитель:</span> Нэфис
                </div>
                <div className={s.product__brand}>
                  <span className={s.gray}>Бренд:</span> AOS
                </div>
              </div>
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>{" "}
          <div className={s.list__item}>
            <div className={s.popular}>Популярное</div>
            <div className={s.imgWrapper_product}>
              <img
                className={s.product__image}
                src={productPNG}
                alt="product"
              />
            </div>
            <div className={s.product__info}>
              <div className={s.product__size}>
                <div className={s.imgWrapper_bottle}>
                  <img
                    className={s.size__image}
                    src={bottleSVG}
                    alt="product"
                  />
                </div>
                <div className={s.size__text}>450 мл</div>
              </div>
              <div className={s.product__name}>
                <span className={s.strong}>AOS</span> Ср-во для мытья посуды
                Апельсин+мята
              </div>
              <div className={s.product__characteristics}>
                <div className={s.product__barcode}>
                  <span className={s.gray}>Штрихкод:</span> 4604049097548
                </div>
                <div className={s.product__manufacturer}>
                  <span className={s.gray}>Производитель:</span> Нэфис
                </div>
                <div className={s.product__brand}>
                  <span className={s.gray}>Бренд:</span> AOS
                </div>
              </div>
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>
          {/* Заканчиваются тут */}
        </div>
      </div>
    </div>
  );
};

export default Promotion;
