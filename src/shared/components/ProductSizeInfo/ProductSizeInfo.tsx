import s from "./ProductSizeInfo.module.css";
const bottleSVG: string = require("../../../image/bottle.svg").default;
/** Компонент отображения веса продукта */
const ProductSizeInfo = (props: { size: number; typeSize: string }) => {
  return (
    <div className={s.product__size}>
      <div className={s.imgWrapper_bottle}>
        <img className={s.size__image} src={bottleSVG} alt="product" />
      </div>
      <div className={s.size__text} data-testid='sizeProduct'>
        <span data-testid='sizeTest'>{props.size}</span> <span data-testid='typeSizeTest'>{props.typeSize}</span>
      </div>
    </div>
  );
};

export default ProductSizeInfo;
