import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../cart/cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

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

    useEffect( () =>
    {
        const data = getShoppingCart()
        console.log(data)
    })

    const handleAddToCart = ( product ) =>
    {
        // cart.push(product); 
        const newCart = [ ...cart, product ];
        // console.log(newCart)
        setCart( newCart );
        addToDb(product.id)
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
            <div className="">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;