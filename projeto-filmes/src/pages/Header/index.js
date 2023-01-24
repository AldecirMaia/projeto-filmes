import './style.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
      <div className="app">
        <header>
          <Link className='logo' to={'/'}>LOGO</Link>
          <Link className='favoritos' to={'/favoritos'}>FAVORITOS</Link>
        </header>
      </div>
    );
  }
  
  export default Header;