// A fragment is a component that renders to nothing when it is actullay mounted on the DOM
//  The whole reasin for using a fragment is because of Reacts rule for using that a component must return a <TOP LEVEL ELEMENT>

import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
    <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
               <CrwnLogo className="logo"></CrwnLogo>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
            </div>
            {/* Link behaves like an anchor tag */}
        </div>
        <Outlet></Outlet>
    </Fragment>
    )
  };
  

  export default Navigation;