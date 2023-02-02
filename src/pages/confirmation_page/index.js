import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
import { clearCart } from '../../store/cart/reducer';
import { Logo } from '../../assets/svg/images';
import URLS from '../../constants/urls';


const ConfirmationPage = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { cartProducts, totalCartPrice } = state;
  const navigate = useNavigate();

  const goToCartPage = () => {
    navigate(URLS.cart);
  }

  const goToCatalogPage = () => {
    dispatch(clearCart());
    navigate(URLS.catalog);
  }

  return (
    <div className='confirmation_page'> 
      <div className="confirmation_page__container">
        <div className="confirmation_page__header">
          <div className="confirmation_page__logo">
            <Logo />
          </div>
          <div className="confirmation_page__icon">
            <Icon icon="clarity:shopping-cart-line" color="#414141" width="30" />
          </div>
        </div>
        <div className="confirmation_page__divider" />
        <div className="confirmation_page__body">
          <p className="confirmation_page__text">
            <span className="confirmation_page__text_icon">
              <Icon width="30" icon="material-symbols:check-small" />
            </span>Your order is comfirmed!
          </p>
          <span className="confirmation_page__thanks">{`Thanks for shopping. You order hasn't shippet yet but we'll send you an email when it does`}</span>
          <div className='confirmation_page__info'>
            <div className="confirmation_page__order_number"><span>Order:</span><span>#29-8624-675124</span></div>
            <div className="confirmation_page__order_info">
              <button className="confirmation_page__button" type="button" onClick={() => goToCartPage()}>Manage order</button>
              <div className="confirmation_page__body_total">
                <span aria-hidden="true">
                  <span className="checkout_price__symbol">$</span>
                  <span className="checkout_price__whole">{totalCartPrice[0]}</span>
                  <span className="checkout_price__fraction">{totalCartPrice[1] ? totalCartPrice[1] : '00'}</span>
                </span>
              </div>
             </div> 
          </div>
          <div className="confirmation_page__divider" />
          <div className="confirmation_page__list">
            {cartProducts.map(({ cartProduct, count }) => {
                const {
                  productId,
                  productName, 
                  fixedRecipientDenominations
                } = cartProduct;
              return (
                <div key={productId}>
                  <div className="confirmation_card">
                  <div className="confirmation_card__img-container">
                    <img
                      className="confirmation_card__img"
                      src={cartProduct.img}
                      alt={productName} />
                  </div>
                  <div className="confirmation_card__title">
                    <span className="confirmation_card__text">{productName}</span>
                    <span className="confirmation_card__count">{count} item(s)</span>
                  </div>
                  <div className="confirmation_card__price">${fixedRecipientDenominations[0] * count}</div>
                </div>
              </div>
            )})}
          </div> 
          <div className="confirmation_page__confirm">
            <button className="confirmation_page__confirm_btn" type="button" onClick={() => goToCatalogPage()}>
              ok
            </button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default ConfirmationPage; 
