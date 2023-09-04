import { NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from '../../assets/images/music-note.png';


function Header() {

  return (
    <header className="header">
        <div className="header__logo">
          <img className="header__logo-image" src={Logo} alt="Logo for DUBLR"/>
        </div>
        <div>
          <h1 className="header__title">DUBLR</h1>
          <nav className="header__nav">
            <NavLink to='/' className={` ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "header__inventory"}`}>
              <div className="header__text">HOME</div>
            </NavLink>
            <NavLink to="/UserSignup" className={` ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "header__warehouses"}`}>
              <div className="header__text">REGISTER</div>
            </NavLink>
            <NavLink to='/UserSearch' className={` ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "header__inventory"}`}>
              <div className="header__text">SEARCH</div>
            </NavLink>
          </nav>
        </div>
    </header>
  );
}

export default Header;