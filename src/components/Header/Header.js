import { Link, NavLink } from "react-router-dom";
import "./Header.scss";


function Header() {

  return (
    <header className="header">
      <div>
        <h1 className="header__title">DUBLR</h1>
        {/* <Link to={"/Warehouses"}><img className="header__logo" src={logo} alt="Logo for Instock Company" /></Link> */}
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