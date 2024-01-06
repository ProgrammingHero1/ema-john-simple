import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../cart/cart';

const Shop = () =>
{
    const [ products, setProducts ] = useState( [] );
    const [ cart, setCart ] = useState( [] )

    useEffect( () =>
    {
        fetch( 'products.json' )
            .then( res => res.json() )
            .then( data => setProducts( data ) )
    }, [] );

    const handleAddToCart = ( product ) =>
    {
        // cart.push(product); 
        const newCart = [ ...cart, product ];
        console.log(newCart)
        setCart( newCart );
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map( product => <Product
                        key={ product.id }
                        product={ product }
                        handleAddToCart={ handleAddToCart }
                    ></Product> )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;