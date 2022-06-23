
import { Link } from "react-router-dom";



const Header = () => {
  return (
    
    <header>
      <nav className='navStyle'>
        <ul className='ulStyle'>
        <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/about'>About</Link>
        <Link className="link" to='/'>Career</Link>
        <Link className="link" to='/'>Education</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
