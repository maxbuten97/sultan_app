import s from './ProductTitle.module.css';
/** Компонент заголовка продукта */
const ProductTitle = (props: {
    brand: string,
    name: string
}) => {
    return (
      <div className={s.product__name} data-testid="nameProduct">
        {props.brand} {props.name}
      </div>
    );
};

export default ProductTitle;