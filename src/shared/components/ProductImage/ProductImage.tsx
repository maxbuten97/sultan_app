import s from './ProductImage.module.css';
/** Компонент отображения картинки продукта */
const ProductImage = (props: {
    url: string
}) => {
    return (
        <div className={s.imgWrapper_product}>
          <img className={s.product__image} src={props.url} alt="product" />
        </div>
    );
};

export default ProductImage;