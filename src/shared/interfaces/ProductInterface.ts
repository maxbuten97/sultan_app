/*Интерфейс продукта*/

export interface IProduct {
    /* Айди */
    id: string;
    /* URL картинки */
    url: string;
    /* Наименование товара */
    name: string;
    /* Тип объема */
    typeSize: string;
    /* Объем */
    size: number;
    /* Штрихкод */
    barcode: string;
    /* Производитель */
    manufacture: string;
    /* Бренд */
    brand: string;
    /* Описание */
    description: string;
    /* Цена */
    price: number;
    /* Категория товара */
    category: string[];
  }

