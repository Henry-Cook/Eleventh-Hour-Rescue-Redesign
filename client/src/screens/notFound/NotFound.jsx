import React from "react";
import Layout from "../../components/layout/Layout.jsx";

const NotFound = () => {
  return (
    <Layout>
      <div className="not-found-container">
        <h1 classname="not-found">404</h1>
        <h1 classname="not-found">Not Found</h1>
        <h1 classname="not-found">The page you are looking for does not currently exist!</h1>
      </div>
    </Layout>
  );
}

export default NotFound;