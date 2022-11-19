// A fragment is a component that renders to nothing when it is actullay mounted on the DOM
//  The whole reasin for using a fragment is because of Reacts rule for using that a component must return a <TOP LEVEL ELEMENT>

import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";


const Navigation = () => {
    return (
    <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <div>Logo</div>
            </Link>
            <div className="links-container"></div>
            {/* Link behaves like an anchor tag */}
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            <h1> I am the Navigation Bar </h1>
        </div>
        <Outlet></Outlet>
    </Fragment>
    )
  };
  

  export default Navigation;