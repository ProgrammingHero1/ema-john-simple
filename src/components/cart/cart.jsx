import React, { useEffect, useState } from 'react';

const Cart = ( { cart } ) =>
{
    const [ details, setDetails ] = useState( {
        totalPrice: 0,
        totalShipping: 0,
        totalTax: 0,
        grandTotal: 0,
    } );

    const { totalPrice, totalShipping, totalTax, grandTotal } = details;

    useEffect( () =>
    {
        const { price, shipping } = cart.reduce(
            ( accumulator, product ) =>
            {
                return {
                    price: accumulator.price + product.price,
                    shipping: accumulator.shipping + product.shipping,
                };
            },
            { price: 0, shipping: 0 }
        );

        const calculatedTotalTax = price / 7 * 0.1;
        const calculatedGrandTotal = price + shipping + calculatedTotalTax;

        setDetails( {
            totalPrice: price,
            totalShipping: shipping,
            totalTax: calculatedTotalTax,
            grandTotal: calculatedGrandTotal,
        } );
    }, [ cart ] );

    return (
        <div className='bg-yellow-400 text-gray-700 w-2/3 py-5'>
            <div className='flex flex-col gap-2'>
                <h4 className='px-3'>Order Summary</h4>
                <p className='bg-green-600 py-1 shadow-sm px-3'>Selected Items: { cart.length }</p>
                <p className='px-3'>Total Price: { totalPrice }</p>
                <p className='px-3'>Total Shipping: { totalShipping }</p>
                <p className='px-3'>Tax: { totalTax.toFixed( 2 ) }</p>
                <p className='py-2 text-sm font-bold px-3'>Grand Total: { grandTotal }</p>
            </div>
        </div>
    );
};

export default Cart;