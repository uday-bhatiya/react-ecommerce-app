import React, { useEffect, useState } from 'react';
import { addToCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import {Button} from '../components'

const Products = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const getProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=8');
            const jsonData = await response.json();
            setProducts(jsonData);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            {products.map((product, index) => (
                <div key={index} className='relative w-[280px] h-[400px] rounded-[20px] bg-[#FFF] border border-zinc-300 shadow-md overflow-hidden p-3 m-2 mb-4'>
                    <div className='w-full h-[70%] rounded-[15px]'>
                        {product.image && <img src={product.image} className='w-full object-contain h-full' alt="" />}
                    </div>
                    <div>
                        {product.category && <h4 className='text-[12px] uppercase font-[600] pt-3'>{product.category}</h4>}
                        {product.title && <h4 className='text-[15px] font-[400] '>{product.title}</h4>}
                        {product.price && <h3 className='text-[15px] font-semibold text-[#0A8271]'>${product.price}</h3>}
                       <div onClick={() => handleAddToCart(product)}>
                       <Button className={'w-[3rem] h-[3rem] rounded-[50%] bg-[#1c8a7bab] text-black font-bold absolute bottom-0 right-0 m-1'} />
                       </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Products;
