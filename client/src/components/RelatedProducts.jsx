import React, { useEffect, useState, useContext } from 'react';
import Title from './Title';
import ProductItem from './ProductItem';  
import { ShopContext } from '../context/ShopContext'; 
import { Link } from 'react-router-dom';  // ✅ import Link

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => item.category === category);
            productsCopy = productsCopy.filter((item) => item.subCategory === subCategory);
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products, category, subCategory]); 

    // ✅ Scroll to top handler
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    related.map((item) => (
                        <Link 
                            to={`/product/${item._id}`}   // ✅ navigate to product page
                            key={item._id}
                            onClick={handleScrollTop}     // ✅ scroll to top
                        >
                            <ProductItem
                                id={item._id}
                                name={item.name}
                                image={item.image}
                                price={item.price}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default RelatedProducts;
