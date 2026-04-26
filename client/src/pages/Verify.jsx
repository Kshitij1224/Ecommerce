import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'


const Verify = () => {

  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext)
  const [searchParams, setSearchParams] = useSearchParams()

  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')

  const verifyPayment = async () => {
    try {
      console.log('Verifying payment...', { success, orderId });
      
      if (!token) {
        console.log('No token found, redirecting to login');
        navigate('/login');
        return;
      }

      const response = await axios.post(
        backendUrl + '/api/order/verifyStripe',
        { success, orderId },
        { headers: { token } }
      );

      console.log('API response:', response.data);

      if (response.data.success) {
        console.log('Payment successful, redirecting to orders');
        setCartItems({});
        navigate('/orders');
        toast.success('Payment successful!');
      } else {
        console.log('Payment failed, redirecting to cart');
        navigate('/cart');
        toast.error('Payment failed or was cancelled');
      }
    } catch (error) {
      console.log('Error in verification:', error);
      toast.error(error.message || 'Payment verification failed');
      navigate('/cart');
    }
  }

  useEffect(() => {
    verifyPayment();
  }, [token])

  return (
    <div>

    </div>
  )
};

export default Verify;
