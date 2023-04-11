import s from "./PromotionProducts.module.css";
import productPNG from "../../../image/product.png";
import ProductSizeInfo from "../../../shared/components/ProductSizeInfo/ProductSizeInfo";
import ProductCharacteristics from "../../../shared/components/ProductCharacteristics/ProductCharacteristics";
import ProductImage from "../../../shared/components/ProductImage/ProductImage";

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
            <ProductImage url={productPNG} />
            <div className={s.product__info}>
            <ProductSizeInfo size={450} typeSize="мл" />

              <div className={s.product__name}>
                <span className={s.strong}>AOS</span> Ср-во для мытья посуды
                Апельсин+мята
              </div>
              <ProductCharacteristics barcode="4604049097548" manufacture="Нэфис" brand="AOS" />
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>
          {/* 7 бесполезных карточек */}
          <div className={s.list__item}>
            <div className={s.popular}>Популярное</div>
            <ProductImage url={productPNG} />
            <div className={s.product__info}>
            <ProductSizeInfo size={450} typeSize="мл" />
              <div className={s.product__name}>
                <span className={s.strong}>AOS</span> Ср-во для мытья посуды
                Апельсин+мята
              </div>
              <ProductCharacteristics barcode="4604049097548" manufacture="Нэфис" brand="AOS" />
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>{" "}
          <div className={s.list__item}>
            <div className={s.popular}>Популярное</div>
            <ProductImage url={productPNG} />
            <div className={s.product__info}>
            <ProductSizeInfo size={450} typeSize="мл" />
              <div className={s.product__name}>
                <span className={s.strong}>AOS</span> Ср-во для мытья посуды
                Апельсин+мята
              </div>
              <ProductCharacteristics barcode="4604049097548" manufacture="Нэфис" brand="AOS" />
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>{" "}
          <div className={s.list__item}>
            <div className={s.popular}>Популярное</div>
            <ProductImage url={productPNG} />
            <div className={s.product__info}>
            <ProductSizeInfo size={450} typeSize="мл" />
              <div className={s.product__name}>
                <span className={s.strong}>AOS</span> Ср-во для мытья посуды
                Апельсин+мята
              </div>
              <ProductCharacteristics barcode="4604049097548" manufacture="Нэфис" brand="AOS" />
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>{" "}
          <div className={s.list__item}>
            <div className={s.popular}>Популярное</div>
            <ProductImage url={productPNG} />
            <div className={s.product__info}>
            <ProductSizeInfo size={450} typeSize="мл" />
              <div className={s.product__name}>
                <span className={s.strong}>AOS</span> Ср-во для мытья посуды
                Апельсин+мята
              </div>
              <ProductCharacteristics barcode="4604049097548" manufacture="Нэфис" brand="AOS" />
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>{" "}
          <div className={s.list__item}>
            <div className={s.popular}>Популярное</div>
            <ProductImage url={productPNG} />
            <div className={s.product__info}>
            <ProductSizeInfo size={450} typeSize="мл" />
              <div className={s.product__name}>
                <span className={s.strong}>AOS</span> Ср-во для мытья посуды
                Апельсин+мята
              </div>
              <ProductCharacteristics barcode="4604049097548" manufacture="Нэфис" brand="AOS" />
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>{" "}
          <div className={s.list__item}>
            <div className={s.popular}>Популярное</div>
            <ProductImage url={productPNG} />
            <div className={s.product__info}>
            <ProductSizeInfo size={450} typeSize="мл" />
              <div className={s.product__name}>
                <span className={s.strong}>AOS</span> Ср-во для мытья посуды
                Апельсин+мята
              </div>
              <ProductCharacteristics barcode="4604049097548" manufacture="Нэфис" brand="AOS" />
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>{" "}
          <div className={s.list__item}>
            <div className={s.popular}>Популярное</div>
            <ProductImage url={productPNG} />
            <div className={s.product__info}>
            <ProductSizeInfo size={450} typeSize="мл" />
              <div className={s.product__name}>
                <span className={s.strong}>AOS</span> Ср-во для мытья посуды
                Апельсин+мята
              </div>
              <ProductCharacteristics barcode="4604049097548" manufacture="Нэфис" brand="AOS" />
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>
          {/* Заканчиваются тут */}
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

export default Promotion;
