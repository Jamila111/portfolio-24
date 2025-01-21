import React from 'react';
import CatalogItem from "./CatalogItem";

const CatalogWrapper = (props) => {

    const {hotels} = props;

    return (
        <div className="catalogWraper">
            {hotels.map(hotel => <CatalogItem hotel={hotel} key={hotel.id}/>)}
        </div>
    );
};

export default CatalogWrapper;