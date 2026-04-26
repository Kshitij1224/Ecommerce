import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal'; // ✅ Added missing import

const Cart = () => {
  const { products, currency, cartItems, updateQuantity,navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        if (cartItems[items][size] > 0) {
          tempData.push({
            _id: items,
            size,
            quantity: cartItems[items][size]
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {/* Empty Cart Message */}
      {cartData.length === 0 && (
        <p className="text-center text-gray-500 my-10">Your cart is empty.</p>
      )}

      {/* Cart Items */}
      <div>
        {cartData.map((item) => {
          const productData = products.find((p) => p._id === item._id);
          if (!productData) return null;

          return (
            <div 
              key={`${item._id}-${item.size}`} 
              className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
            >
              {/* Product Info */}
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <p className='text-sm'>Size: {item.size}</p>
                  <p className='text-sm'>
                    Price: {currency}{productData.price} 
                  </p>
                  <p className='text-sm'>
                    Total Price : {currency}{productData.price * item.quantity} 
                  </p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button 
                  className="px-2 py-1 border rounded cursor-pointer hover:bg-gray-100"
                  onClick={() =>
                    item.quantity > 1
                      ? updateQuantity(item._id, item.size, item.quantity - 1)
                      : updateQuantity(item._id, item.size, 0)
                  }
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button 
                  className="px-2 py-1 border rounded hover:bg-gray-100 cursor-pointer"
                  onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              {/* Delete Icon */}
              <img 
                onClick={() => updateQuantity(item._id, item.size, 0)} 
                className='w-4 mr-4 sm:w-5 cursor-pointer hover:opacity-70' 
                src={assets.bin_icon} 
                alt="Remove item" 
              />
            </div>
          );
        })}
      </div>

      {/* Cart Total */}
      {cartData.length > 0 && (
        <div className='flex justify-end my-20'>
          <div className='w-full sm:w-[450px]'>
            <CartTotal />
            <div className='w-full text-end'>
              <button onClick={() => navigate('/placeorder')} className='bg-black text-white text-sm my-8 px-8 py-3 rounded cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-200'>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
