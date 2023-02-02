

import cn from 'classnames';
import Header from '../header';

const Layout = ({ isCart, isHeader, children }) => (
  <div className='container'>
    {isHeader && (<Header />)}
    <main className={cn("main", { white: isCart })}>{children}</main>
  </div>
);

export default Layout;