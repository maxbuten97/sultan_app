import { IProduct } from './ProductInterface';
/** Интерфейс для продукта корзины */
export interface IBasketProduct {
    /**Количество товаров в корзине */
    count: number;
    /**Продукт в корзине */
    product: IProduct;
    /**Общая сумма количества продукта в корзине */
    totalSum: number;
}