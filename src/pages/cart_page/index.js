/* eslint-disable react/jsx-no-useless-fragment */
import { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CartCard, ReccomendedCard, Loader } from '../../components';
import useCheckCount from '../../helpers/hooks'
import getProducts from '../../helpers/actions';


const CartPage = () => {
  const { products } = useSelector(state => state.products);
  const cartProductSet = useSelector(state => state.cart.cart);
  const [cartProducts, setCartProducts] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const { cartProductCount: { totalPrice} } = useCheckCount();
  const totalCartPrice = useMemo(() => totalPrice.toFixed(2).toString().split('.'), [totalPrice]);
  const navigate = useNavigate();

  const goToConfirmationPage = () => {
    navigate('/confirm', { state: { cartProducts, totalCartPrice } });
  }
  
  useEffect(() => {
    const selectedProducts = getProducts(cartProductSet, products);
    setCartProducts(selectedProducts);
  }, [cartProductSet, products])

  useEffect(() => {
    if(products[1]) {
      const randomIds = new Array(4).fill(0).map(() => Math.floor(Math.random() * products.length));
      const recommended = products.filter((item, ind) => randomIds.includes(ind));
      setRecommendedProducts(recommended);
    }
  }, [products])

  return ( 
    <>
      {cartProducts ? (<div className="cart_page">
        <div className="cart_list">
        {cartProducts?.length > 0 
          ? (
            <>
              <div className="cart_list__header">
                <p className="cart_title">Shopping Cart</p>
                <span className="cart_selected">No items selected.</span>
                <button type="button" className="cart_button--selected" onClick={() => {}}>
                  Select all items
                </button>
              </div>
              <div className="cart_list__body">
                {cartProducts.map(({ cartProduct, count }) => (
                  <div key={cartProduct.productId + new Date().toString}>
                    <CartCard 
                      cartProduct={cartProduct} 
                      count={count} 
                    />
                    <div className="cart_list__divider" />
                  </div>
                ))}
                <div className='cart_list__subtotal'>
                  <span className="checkout_text">
                    Subtotal
                  </span>
                  <span aria-hidden="true">
                    <span className="checkout_price__symbol">$</span>
                    <span className="checkout_price__whole">{totalCartPrice[0]}</span>
                    <span className="checkout_price__fraction">{totalCartPrice[1] ? totalCartPrice[1] : '00'}</span>
                  </span>
                </div>
              </div>
            </>
          ) : (<p className='cart_list__empty'>Your Cart is empty</p>)  
        } 
        </div>
        <div className="cart_checkout">
          <span className="checkout_text">
            Subtotal
          </span>
          <span aria-hidden="true">
            <span className="checkout_price__symbol">$</span>
            <span className="checkout_price__whole">{totalCartPrice[0]}</span>
            <span className="checkout_price__fraction">{totalCartPrice[1] ? totalCartPrice[1]: '00'}</span>
          </span>
          <button type="button" className="cart_button--checkout" onClick={() => {goToConfirmationPage()}}>
            Proceed to checkout
          </button>    
        </div>
        <div className="cart_recommend">
          <p className="cart_recommend__title">
            Products related to items in your cart
          </p>
          <div className="cart_recommend__list">
            {recommendedProducts?.map((product) => ( 
              <div key={product.productId}>
                <ReccomendedCard 
                  good={product} 
                />
                <div className='cart_recommend__divider' />
              </div>
            ))}
          </div> 
        </div>
      </div>) : (<Loader />)}
    </>
  )
}

export default CartPage;