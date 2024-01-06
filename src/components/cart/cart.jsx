import React, { useEffect, useState } from 'react';

const Cart = ( { cart } ) =>
{
    const [ price, setPrice ] = useState( 0 )
    
    useEffect( () =>
    {
        let total = 0
        for ( const product of cart )
        {
            total += product.price
        }

        setPrice( total )
        console.log(total)
    }, [ cart ] )
    

    return (
        <div className='bg-yellow-400 text-gray-700 w-2/3 py-5'>
            <div className='flex flex-col gap-2'>
                <h4 className='px-3'>Order Summary</h4>
                <p className='bg-green-600 py-1 shadow-sm px-3'>Selected Items: { cart.length }</p>
                <p className='px-3'>Total Price: { price }</p>
                <p className='px-3'>Total Shipping: </p>
                <p className='px-3'>Tax: </p>
                <p className='py-2 text-sm font-bold px-3'>Grand Total: </p>
            </div>
        </div>
    )
};

export default Cart;