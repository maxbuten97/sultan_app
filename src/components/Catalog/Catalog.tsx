import React from 'react';
import s from './Catalog.module.css';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import CatalogCategories from './CatalogCategories/CatalogCategories';
import Content from './Cоntent/Content';

const Catalog = () => {
    return (
        <div className={s.catalog}>
            <BreadCrumbs />
            <CatalogCategories />
            <Content />
        </div>
    );
};

export default Catalog;