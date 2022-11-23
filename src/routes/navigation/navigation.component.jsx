// A fragment is a component that renders to nothing when it is actullay mounted on the DOM
//  The whole reasin for using a fragment is because of Reacts rule for using that a component must return a <TOP LEVEL ELEMENT>

import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser} = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  }


  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo"></CrwnLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        {/* Cart Link */}
            <CartIcon />
        </div>
        
        <CartDropdown />
        {/* Link behaves like an anchor tag */}
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
