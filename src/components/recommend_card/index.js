import { useEffect, useState, useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartProduct } from '../../store/cart/reducer';


const ReccomendedCard = memo(({ good }) => {
  const {
    productId,
    img,
    productName,
    type,
    fixedRecipientDenominations
  } = good;

  const dispatch = useDispatch();
  const cartProductSet = useSelector(state => state.cart.cart);
  const [isCartProduct, setIsCartProduct] = useState(false);

  const checkIsProductInCart = useCallback(() => {
    const response = !!cartProductSet.find(item => item.productId === productId);
    return response;
  }, [cartProductSet, productId])
 
  useEffect(() => {
    setIsCartProduct(checkIsProductInCart())
  }, [checkIsProductInCart]);


  const addToCart = (id) => {
    if(isCartProduct) {
      return;
    }
    dispatch(addCartProduct(id))
  }
  
  return ( 
    <div key={productId} className="recommend_card">
      <div className="recommend_card__top">
        <img className="recommend_card__image" alt={productName} src={img} />
      </div>
      <div className="recommend_card__bottom">
        <span className="recommend_card__name">{productName}</span>
        <p className="recommend_card__type">{type}</p>
        <hr className="recommend_card__divider" />
        <div className="recommend_card__panel">
          <span className="recommend_card__panel_price">${fixedRecipientDenominations[0]}</span>
          <button 
            className={`recommend_card__panel_button ${isCartProduct && 'recommend_card__panel_button--disabled'}`} type="button" onClick={() => {addToCart(productId)}}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
   );
});

export default ReccomendedCard;