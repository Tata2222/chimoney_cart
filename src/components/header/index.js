import { NavLink } from 'react-router-dom';
// import { Logo } from '../../assets/svg/images';
import Nav from '../nav';

const Header = () => (
    <header className="header">
      <div className="header_container">
        <NavLink className="header_logo" to="/" />
        <Nav />
      </div>
    </header>
  )

  export default Header;