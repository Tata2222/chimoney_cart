import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import useCheckCount from '../../helpers/hooks';

const Nav = () => {
  const { cartProductCount: { totalCount }, favProductCount } = useCheckCount();

  return (
  <div className="nav">
    <NavLink to="/fav" className="nav_item">
      <Icon icon="ph:heart" color="#414141" width="34" />
      {!!favProductCount && (<span className="nav_item__count">
        {favProductCount} 
      </span>
      )}
    </NavLink>
    <NavLink to="/cart" className="nav_item">
      <Icon icon="clarity:shopping-cart-line" color="#414141" width="34" />
      {!!totalCount && (<span className="nav_item__count">
        {totalCount}
      </span>
      )}
    </NavLink>
  </div>
)}

export default Nav;