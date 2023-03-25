import React from 'react';
import s from './CardProduct.module.css';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import Card from './Card/Card';
import SimilarProducts from './SimilarProducts/SimilarProducts';
import RecentlyProducts from './RecentlyProducts/RecentlyProducts';

const CardProduct = () => {
    return (
        <div className={s.card__product}>
            <BreadCrumbs />
            <Card />
            {/* <SimilarProducts /> */}
            {/* <RecentlyProducts /> */}
        </div>
    );
};

export default CardProduct;