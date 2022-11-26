// A fragment is a component that renders to nothing when it is actullay mounted on the DOM
//  The whole reasin for using a fragment is because of Reacts rule for using that a component must return a <TOP LEVEL ELEMENT>

import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";


import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart-context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import  {NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles";

const Navigation = () => {
  const { currentUser} = useContext(UserContext);

  const { isCartOpen } = useContext(CartContext);


  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo"></CrwnLogo>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={ signOutUser }>SIGN OUT</NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
        {/* Cart Link */}
            <CartIcon />
        </NavLinks>

        { isCartOpen && <CartDropdown /> }
        {/* Link behaves like an anchor tag */}
      </NavigationContainer>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
