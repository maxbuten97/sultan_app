import React from 'react';
import s from './CardProduct.module.css';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import Card from './Card/Card';
import SimilarProducts from './SimilarProducts/SimilarProducts';
import RecentlyProducts from './RecentlyProducts/RecentlyProducts';
import { IProduct } from '../../shared/interfaces/ProductInterface';

const CardProduct = (props: {
    isAdmin: boolean;
    storage: IProduct[];
    editProduct: (product: IProduct) => void;
}) => {
    return (
        <div className={s.card__product}>
            <BreadCrumbs />
            <Card storage={props.storage} isAdmin={props.isAdmin} editProduct={props.editProduct}/>
            {/* <SimilarProducts /> */}
            {/* <RecentlyProducts /> */}
        </div>
    );
};

export default CardProduct;