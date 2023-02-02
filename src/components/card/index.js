import { useEffect, useState, useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import { addCartProduct } from '../../store/cart/reducer';
import { addFavProduct, removeFavProduct } from '../../store/favourites/reducer';


const Card = memo(({ good }) => {
  const {
    productId,
    img,
    productName,
    type,
    fixedRecipientDenominations
  } = good;

  const dispatch = useDispatch();
  const cartProductSet = useSelector(state => state.cart.cart);
  const favProductSet = useSelector(state => state.favourites.favourites);
  const [isCartProduct, setIsCartProduct] = useState(false);
  const [isFavProduct, setIsFavProduct] = useState(false);

  const checkIsProductInCart = useCallback(() => {
    const response = !!cartProductSet.find(item => item.productId === productId);
    return response;
  }, [cartProductSet, productId])

  const checkIsProductInFav = useCallback(() => {
    const response = favProductSet.find(goodId => goodId === productId);
    return Boolean(response);
  }, [favProductSet, productId])
 
  useEffect(() => {
    setIsCartProduct(checkIsProductInCart())
  }, [checkIsProductInCart]);

  useEffect(() => {
    setIsFavProduct(checkIsProductInFav())
  }, [checkIsProductInFav])

  const addToCart = (id) => {
    if(isCartProduct) {
      return;
    }
    dispatch(addCartProduct(id))
  }

  const handleFavourites = (id) => {
    
    if(isFavProduct) {
      dispatch(removeFavProduct(id))
    } else {
      dispatch(addFavProduct(id))
    }
  }
  
  return ( 
    <>
      <div className="card_top">
        <img className="card_image" alt={productName} src={img} />
        <button className="card_button card_button__like" tabIndex="0" type="button" onClick={() => {handleFavourites(productId)}}>
          <span className='card_label'> 
            <Icon icon="mdi:cards-heart" color={isFavProduct ? '#414141' : '#e7e7e7'} />
          </span>
        </button>
      </div>
      <div className="card_bottom">
        <span className="card_name">{productName}</span>
        <p className="card_type">{type}</p>
        <hr className="card_divider" />
        <div className="card_panel">
          <span className="card_panel__price">${fixedRecipientDenominations[0]}</span>
          <button 
            className={`card_panel__button ${isCartProduct && 'card_panel__button--disabled'}`} type="button" onClick={() => {addToCart(productId)}}>
            Add to cart
          </button>
        </div>
      </div>
    </>
   );
});

export default Card;