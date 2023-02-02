import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux'

const useCheckCount = () => {
  const [cartProductCount, setCartProductCount] = useState({ totalCount: 0, totalPrice: 0 });
  const [favProductCount, setFavProductCount] = useState(0);

  const { products } = useSelector(state => state.products);
  const cartProductSet = useSelector(state => state.cart.cart);
  const { favourites } = useSelector(state => state.favourites);

  const countFavProducts = useCallback(() => favourites.length, [favourites])

  const countCartProducts = useCallback(() => {
    let totalPrice = 0;
    let totalCount = 0;
    cartProductSet.forEach(({ productId, count }) => {
      const cartProduct = products.find(product => product.productId === productId);
      totalPrice += (cartProduct ? cartProduct.fixedRecipientDenominations[0] : 0) * count;
      totalCount += count
    });
    return { totalPrice, totalCount }
  }, [cartProductSet, products])

  useEffect(() => {
    setCartProductCount(countCartProducts());  
  }, [countCartProducts]);

  useEffect(() => {
    setFavProductCount(countFavProducts());  
  }, [countFavProducts]);

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify([...cartProductSet]));
    localStorage.setItem('favouriteProducts', JSON.stringify([...favourites]));
  }, [favourites, cartProductSet]);

  return { cartProductCount, favProductCount };
}

export default useCheckCount;