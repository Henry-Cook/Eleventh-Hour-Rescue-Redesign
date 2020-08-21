import React from "react";
import Nav from '../nav/Nav.jsx';

const Layout = (props) => {
  <div className="layout">
    <Nav />
    <div className="layout-children">{props.children}</div>
    <footer>
      <h4>© 2020 EHR. All rights reserved.</h4>
    </footer>
  </div>
}

export default Layout;
