import React from "react";
import Nav from '../nav/Nav.jsx';
import "./layout.css"

const Layout = (props) => {

  return (
  <div className="layout">
    <Nav />
    <div className="layout-children">{props.children}</div>
    <footer>
      <h4>© 2020 EHR. All rights reserved.</h4>
    </footer>
  </div>
  );
}

export default Layout;
