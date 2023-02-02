import { useDispatch } from 'react-redux';
import { 
  increaseCartProductCount, 
  decreaseCartProductCount, 
  removeCartProduct
} from "../../store/cart/reducer"


const CartCard = ({ cartProduct, count }) => {
  const {
    productId,
    productName, 
    img, 
    fixedRecipientDenominations
  } = cartProduct;

  const dispatch = useDispatch();

  const increaseCount = (id) => {
    dispatch(increaseCartProductCount(id))
  }

  const decreaseCount = (id) => {
    dispatch(decreaseCartProductCount(id))
  }

  const removeProduct = (id) => {
    dispatch(removeCartProduct(id))
  }

  return (
    <section className="cart_card">
      <div className="cart_card__img-container">
        <img
          className="cart_card__img"
          src={img}
          alt={productName} />
      </div>

      <div className="cart_card__title">
        <span className="cart_card__text">{productName}</span>
        <span className="cart_card__price">${fixedRecipientDenominations[0] * count}</span>
      </div>
        
      <div className="cart_card__tools">
        <button className="cart_card__tools--minus"
          type="button"
          onClick={() => {decreaseCount(productId)}}
        >
          -
        </button>
        <span className="cart_card__tools--number">
          {count}
        </span>
        <button className="cart_card__tools--plus"
          type="button"
          onClick={() => increaseCount(productId)}
        >
          +
        </button>
        <button className="cart_card__tools--delete"
          type="button"
          onClick={() => removeProduct(productId)}
        >
          Delete
        </button>
      </div>
    </section>
    )
  }


export default CartCard;