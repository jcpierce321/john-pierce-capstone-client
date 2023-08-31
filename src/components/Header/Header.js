import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {

  return (
    <header className="header">
      <div className="header__container">
        {/* <Link to={"/Warehouses"}><img className="header__logo" src={logo} alt="Logo for Instock Company" /></Link> */}
        <nav className="header__nav">
          <NavLink
            className={` ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "header__warehouses"}`}
            to={"../UserForm"}
          >
            <div className="header__text">Register</div>
          </NavLink>
          <NavLink
            className={` ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "header__inventory"}`} to={"../UserSearchForm"}
          >
            <div className="header__text">Search</div>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;