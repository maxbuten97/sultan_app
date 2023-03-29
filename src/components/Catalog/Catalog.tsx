import React, { useState } from 'react';
import s from './Catalog.module.css';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import CatalogCategories from './CatalogCategories/CatalogCategories';
import Content from './Cоntent/Content';
import { IProduct } from '../../shared/interfaces/ProductInterface';
import { ICareCategory } from '../../shared/interfaces/CareCategoryInterface';

const Catalog = (props: {
    storage: IProduct[];
    careCategories: ICareCategory[];
    deleteProduct: (product:IProduct) => void;
    isAdmin: boolean;
    setIsAdmin: (isAdmin :boolean) => void;
}) => {
    const [selectedCareCategory, setSelectedCareCategory] = useState<string>('')
    const [sorted, setSorted] = useState<string>('');


    return (
        <div className={s.catalog}>
            <BreadCrumbs />
            <CatalogCategories selectedCareCategory={selectedCareCategory} setSelectedCareCategory={setSelectedCareCategory} careCategories={props.careCategories} isAdmin={props.isAdmin} setIsAdmin={props.setIsAdmin} sorted={sorted} setSorted={setSorted}/>
            <Content selectedCareCategory={selectedCareCategory} setSelectedCareCategory={setSelectedCareCategory} storage={props.storage} careCategories={props.careCategories} deleteProduct={props.deleteProduct} isAdmin={props.isAdmin} sorted={sorted}/>
        </div>
    );
};

export default Catalog;