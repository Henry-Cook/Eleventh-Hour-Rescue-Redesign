import React, { useState } from "react";
import Form from "../../components/form/Form";
import "./donate.css";
import Layout from "../../components/layout/Layout";

function Donate() {
  return (
    <>
      <Layout>
        <div className="donate-container">
          <Form />
        </div>
      </Layout>
    </>
  );
}

export default Donate;
