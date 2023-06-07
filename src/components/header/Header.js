import { NavLink } from "react-router-dom";
import './style.css';
import CartBlock from "../cart-block/CartBlock";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <NavLink to="/" className="header__store-title">
    Game Store
        </NavLink>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
}
 
export default Header;