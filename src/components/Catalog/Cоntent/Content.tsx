import React from "react";
import s from "./Content.module.css";
import airWickPNG from "../../../image/airwick.png";
import masterFreshPNG from "../../../image/masterFresh.png";
import sibiarPNG from "../../../image/Sibiar.png";
import cottonClubPNG from "../../../image/cottonClub.png";
import camayPNG from "../../../image/camay.png";
import productPNG from "../../../image/product.png";
const bottleSVG: string = require("../../../image/bottle.svg").default;
const searchSVG: string = require("../../../image/search.svg").default;
const basketDeleteSVG: string = require("../../../image/basket_delete.svg").default;

const Content = () => {
  return (
    <div className={s.content}>
      <div className={s.container}>
        <div className={s.column}>
          <div className={s.sidebar_filter}>
            <div className={s.sidebar__title}>Подбор по параметрам</div>
            <div className={s.price__filter}>
              <div className={s.price__title}>
                Цена <span className={s.strong}>₸</span>{" "}
              </div>
              <div className={s.price}>
                <div className={s.price__input_from}>0</div>
                <div className={s.delimiter}>-</div>
                <div className={s.price__input_to}>10 000</div>
              </div>
            </div>
            <div className={s.manufacturer__filter}>
              <div className={s.manufacturer__title}>Производитель</div>
              <div className={s.search}>
                <div className={s.input__wrapper}>
                  <input
                    className={s.search__input}
                    type="text"
                    placeholder="Поиск..."
                  />
                </div>
                <div className={s.image__wrapper}>
                  <img
                    className={s.search__image}
                    src={searchSVG}
                    alt="search"
                  />
                </div>
              </div>
              <div className={s.checkbox__block}>
                <div className={s.checkbox__wrapper}>
                  <input
                    className={s.chekbox}
                    type="checkbox"
                    name="a"
                    value=""
                  />
                  <div className={s.checkbox__name}>Grifon</div>
                  <div className={s.remainder}>(56)</div>
                </div>
                <div className={s.checkbox__wrapper}>
                  <input
                    className={s.chekbox}
                    type="checkbox"
                    name="a"
                    value=""
                  />
                  <div className={s.checkbox__name}>Boyscout</div>
                  <div className={s.remainder}>(66)</div>
                </div>
                <div className={s.checkbox__wrapper}>
                  <input
                    className={s.chekbox}
                    type="checkbox"
                    name="a"
                    value=""
                  />
                  <div className={s.checkbox__name}>Paclan</div>
                  <div className={s.remainder}>(166)</div>
                </div>
                <div className={s.checkbox__wrapper}>
                  <input
                    className={s.chekbox}
                    type="checkbox"
                    name="a"
                    value=""
                  />
                  <div className={s.checkbox__name}>Булгари Грин</div>
                  <div className={s.remainder}>(21)</div>
                </div>
              </div>
              <div className={s.view}>Показать все</div>
            </div>
                <div className={s.view__buttons_block}>
                    <div className={s.view__button}>Показать</div>
                    <div className={s.basket__delete}>
                        <img src={basketDeleteSVG} alt="basket_delete" />
                    </div>
                </div>
            <div className={s.categories__filter}>
              <div className={s.categories__title}>Уход за телом</div>
              <div className={s.categories__list}>
                <div className={s.categories__item}>Эпиляция и депиляция</div>
                <div className={s.categories__item}>
                  Средства для ванны и душа
                </div>
                <div className={s.categories__item}>Скрабы, пилинги и пр.</div>
                <div className={s.categories__item}>
                  Мочалки и губки для тела
                </div>
                <div className={s.categories__item}>Кремы, лосьоны, масла</div>
                <div className={s.categories__item}>Интимный уход</div>
                <div className={s.categories__item}>
                  Дезодоранты, антиперспиранты
                </div>
                <div className={s.categories__item}>Гели для душа</div>
              </div>
              {/* Бесполезные категории */}
              <div className={s.line}></div>
              <div className={s.categories__title}>Уход за телом</div>
              <div className={s.categories__list}>
                <div className={s.categories__item}>Эпиляция и депиляция</div>
                <div className={s.categories__item}>
                  Средства для ванны и душа
                </div>
                <div className={s.categories__item}>Скрабы, пилинги и пр.</div>
                <div className={s.categories__item}>
                  Мочалки и губки для тела
                </div>
                <div className={s.categories__item}>Кремы, лосьоны, масла</div>
                <div className={s.categories__item}>Интимный уход</div>
                <div className={s.categories__item}>
                  Дезодоранты, антиперспиранты
                </div>
                <div className={s.categories__item}>Гели для душа</div>
              </div>{" "}
              <div className={s.line}></div>
              <div className={s.categories__title}>Уход за телом</div>
              <div className={s.categories__list}>
                <div className={s.categories__item}>Эпиляция и депиляция</div>
                <div className={s.categories__item}>
                  Средства для ванны и душа
                </div>
                <div className={s.categories__item}>Скрабы, пилинги и пр.</div>
                <div className={s.categories__item}>
                  Мочалки и губки для тела
                </div>
                <div className={s.categories__item}>Кремы, лосьоны, масла</div>
                <div className={s.categories__item}>Интимный уход</div>
                <div className={s.categories__item}>
                  Дезодоранты, антиперспиранты
                </div>
                <div className={s.categories__item}>Гели для душа</div>
              </div>{" "}
              <div className={s.line}></div>
              <div className={s.categories__title}>Уход за телом</div>
              <div className={s.categories__list}>
                <div className={s.categories__item}>Эпиляция и депиляция</div>
                <div className={s.categories__item}>
                  Средства для ванны и душа
                </div>
                <div className={s.categories__item}>Скрабы, пилинги и пр.</div>
                <div className={s.categories__item}>
                  Мочалки и губки для тела
                </div>
                <div className={s.categories__item}>Кремы, лосьоны, масла</div>
                <div className={s.categories__item}>Интимный уход</div>
                <div className={s.categories__item}>
                  Дезодоранты, антиперспиранты
                </div>
                <div className={s.categories__item}>Гели для душа</div>
              </div>{" "}
              <div className={s.line}></div>
              <div className={s.categories__title}>Уход за телом</div>
              <div className={s.categories__list}>
                <div className={s.categories__item}>Эпиляция и депиляция</div>
                <div className={s.categories__item}>
                  Средства для ванны и душа
                </div>
                <div className={s.categories__item}>Скрабы, пилинги и пр.</div>
                <div className={s.categories__item}>
                  Мочалки и губки для тела
                </div>
                <div className={s.categories__item}>Кремы, лосьоны, масла</div>
                <div className={s.categories__item}>Интимный уход</div>
                <div className={s.categories__item}>
                  Дезодоранты, антиперспиранты
                </div>
                <div className={s.categories__item}>Гели для душа</div>
              </div>{" "}
              <div className={s.line}></div>
              <div className={s.categories__title}>Уход за телом</div>
              <div className={s.categories__list}>
                <div className={s.categories__item}>Эпиляция и депиляция</div>
                <div className={s.categories__item}>
                  Средства для ванны и душа
                </div>
                <div className={s.categories__item}>Скрабы, пилинги и пр.</div>
                <div className={s.categories__item}>
                  Мочалки и губки для тела
                </div>
                <div className={s.categories__item}>Кремы, лосьоны, масла</div>
                <div className={s.categories__item}>Интимный уход</div>
                <div className={s.categories__item}>
                  Дезодоранты, антиперспиранты
                </div>
                <div className={s.categories__item}>Гели для душа</div>
              </div>{" "}
              <div className={s.line}></div>
              <div className={s.categories__title}>Уход за телом</div>
              <div className={s.categories__list}>
                <div className={s.categories__item}>Эпиляция и депиляция</div>
                <div className={s.categories__item}>
                  Средства для ванны и душа
                </div>
                <div className={s.categories__item}>Скрабы, пилинги и пр.</div>
                <div className={s.categories__item}>
                  Мочалки и губки для тела
                </div>
                <div className={s.categories__item}>Кремы, лосьоны, масла</div>
                <div className={s.categories__item}>Интимный уход</div>
                <div className={s.categories__item}>
                  Дезодоранты, антиперспиранты
                </div>
                <div className={s.categories__item}>Гели для душа</div>
              </div>{" "}
              <div className={s.line}></div>
              <div className={s.categories__title}>Уход за телом</div>
              <div className={s.categories__list}>
                <div className={s.categories__item}>Эпиляция и депиляция</div>
                <div className={s.categories__item}>
                  Средства для ванны и душа
                </div>
                <div className={s.categories__item}>Скрабы, пилинги и пр.</div>
                <div className={s.categories__item}>
                  Мочалки и губки для тела
                </div>
                <div className={s.categories__item}>Кремы, лосьоны, масла</div>
                <div className={s.categories__item}>Интимный уход</div>
                <div className={s.categories__item}>
                  Дезодоранты, антиперспиранты
                </div>
                <div className={s.categories__item}>Гели для душа</div>
              </div>
              {/* Заканчиваются тут */}
            </div>
            <div className={s.line}></div>
            <div className={s.brands}>
              <div className={s.brands__title}>Бренды</div>
              <div className={s.brands__list}>
                <div className={s.brands__item}>
                  <div className={s.imgWrapper}>
                    <img
                      className={s.image}
                      src={airWickPNG}
                      alt="categories"
                    />
                  </div>
                </div>
                <div className={s.brands__item}>
                  <div className={s.imgWrapper}>
                    <img
                      className={s.image}
                      src={masterFreshPNG}
                      alt="categories"
                    />
                  </div>
                </div>
                <div className={s.brands__item}>
                  <div className={s.imgWrapper}>
                    <img className={s.image} src={sibiarPNG} alt="categories" />
                  </div>
                </div>
                <div className={s.brands__item}>
                  <div className={s.imgWrapper}>
                    <img
                      className={s.image}
                      src={cottonClubPNG}
                      alt="categories"
                    />
                  </div>
                </div>
                <div className={s.brands__item}>
                  <div className={s.imgWrapper}>
                    <img className={s.image} src={camayPNG} alt="categories" />
                  </div>
                </div>
              </div>
              <div className={s.view}>Показать все</div>
            </div>
          </div>

          <div className={s.product__list}>
            <div className={s.list__item}>
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
            <div className={s.list__item}>
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
            <div className={s.pagination__block}>
            <ul className={s.pagination}>
            <li><div className={s.arrow}>❮</div></li>
            <li><a className={s.active}href="/">1</a></li>
            <li><a href="/">2</a></li>
            <li><a href="/">3</a></li>
            <li><a href="/">4</a></li>
            <li><a href="/">5</a></li>
            <li><div className={s.arrow}>❯</div></li>
                </ul>
            </div>

            {/* Заканчиваются тут */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
