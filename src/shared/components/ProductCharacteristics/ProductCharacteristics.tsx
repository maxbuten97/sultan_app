import s from "./ProductCharacteristics.module.css";

const ProductCharacteristics = (props: {
  barcode: string;
  manufacture: string;
  brand: string;
}) => {

  return (
    <div className={s.product__characteristics}>
        <div className={s.product__barcode} data-testid="barcode">
            <span className={s.gray}>Штрихкод:</span> {props.barcode}
        </div>
        <div className={s.product__manufacturer} data-testid="manufacture">
            <span className={s.gray}>Производитель:</span> {props.manufacture}
        </div>
        <div className={s.product__brand} data-testid="brand">
            <span className={s.gray}>Бренд:</span> {props.brand}
        </div>
    </div>
  );
};

export default ProductCharacteristics;
