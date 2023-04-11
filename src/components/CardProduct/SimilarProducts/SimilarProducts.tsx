import s from './SimilarProducts.module.css';
import productPNG from "../../../image/product.png";
import ProductSizeInfo from '../../../shared/components/ProductSizeInfo/ProductSizeInfo';
import ProductCharacteristics from '../../../shared/components/ProductCharacteristics/ProductCharacteristics';
import ProductImage from '../../../shared/components/ProductImage/ProductImage';
import ProductTitle from '../../../shared/components/ProductTitle/ProductTitle';

const SimilarProducts = () => {
    return (
        <div className={s.similar__products}>
      <div className={s.container}>
        <div className={s.similar__title}>
          <span className={s.similar__text}>Похожие</span> Товары
        </div>
        <div className={s.product__list}>
          <div className={s.list__item}>
          <ProductImage url={productPNG} />
            <div className={s.product__info}>
            <ProductSizeInfo size={450} typeSize="мл" />
            <ProductTitle brand="AOS" name="Ср-во для мытья посуды
                Апельсин+мята" />
              <ProductCharacteristics barcode="4604049097548" manufacture="Нэфис" brand="AOS" />
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>
          {/* 3 бесполезных карточек */}


          <div className={s.list__item}>
          <ProductImage url={productPNG} />
            <div className={s.product__info}>
            <ProductSizeInfo size={450} typeSize="мл" />
            <ProductTitle brand="AOS" name="Ср-во для мытья посуды
                Апельсин+мята" />
              <ProductCharacteristics barcode="4604049097548" manufacture="Нэфис" brand="AOS" />
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>{" "}
          <div className={s.list__item}>
          <ProductImage url={productPNG} />
            <div className={s.product__info}>
            <ProductSizeInfo size={450} typeSize="мл" />
            <ProductTitle brand="AOS" name="Ср-во для мытья посуды
                Апельсин+мята" />
              <ProductCharacteristics barcode="4604049097548" manufacture="Нэфис" brand="AOS" />
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>{" "}
          <div className={s.list__item}>
          <ProductImage url={productPNG} />
            <div className={s.product__info}>
            <ProductSizeInfo size={450} typeSize="мл" />
            <ProductTitle brand="AOS" name="Ср-во для мытья посуды
                Апельсин+мята" />
              <ProductCharacteristics barcode="4604049097548" manufacture="Нэфис" brand="AOS" />
              <div className={s.product__price_block}>
                <div className={s.product__price}>48,76 ₸</div>
                <div className={s.product__btn}>В корзину</div>
              </div>
            </div>
          </div>
          {/* Заканчиваются тут */}

          {/* А это важная штука */}
          <div className={s.slider}>
            <div className={s.rectangle_active}></div>
            <div className={s.rectangle}></div>
            <div className={s.rectangle}></div>
            <div className={s.rectangle}></div>
          </div>
          {/* Заканчивается здесь */}
        </div>
      </div>
        </div>
    );
};

export default SimilarProducts;