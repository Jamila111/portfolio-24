import React from 'react';

const CatalogItem = ({hotel}) => {
    return (<div className="catalogItem">
            <img src={hotel.img} alt={hotel.name} width={100} height={200}/>
            <h3 className='name'>{hotel.name}</h3>
            <p className='description'>{hotel.description}</p>
            <p className='price'>Price: ${hotel.price}</p>
            <p className='city'>City: {hotel.city}</p>
            <button className='book-button'>Book</button>
        </div>);
};

export default CatalogItem;