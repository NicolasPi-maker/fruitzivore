import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {

  const basketIcon = <i className="fa-solid fa-basket-shopping"></i>;

    return (
      <header>
        <Link to='/' className="logo-bloc">
          <img src={logo} alt='Fruitzivore' />
        </Link>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/unit'>A la carte</Link>
          <Link to='/contact'>{basketIcon}</Link>
        </nav>
      </header>
    );
  }
  
  export default Header;
  

