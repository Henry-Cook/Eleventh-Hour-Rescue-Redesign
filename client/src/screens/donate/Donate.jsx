import React, { useEffect } from "react";
import Form from "../../components/form/Form";
import "./donate.css";
import Layout from "../../components/layout/Layout";
import imgSrc from "../../assets/images/DonateDesktop-Header.png";

function Donate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout>
        <div className="donate-header">
          <img src={imgSrc} alt="donate-header" className="header-img" />
          <h2 className="header-title">
            Donate <span className="now-span">NOW</span> to SAVE LIVES!
          </h2>
          <p className="header-text">
            Your donations help with medical costs, transporting dogs, boarding,
            feeding, fostering and facility maintenance. In 2019, we have
            received over $10,000 in donations from our valued supporters. All
            donations help with medical costs, transporting dogs, boarding,
            feeding, fostering and facility maintenance.
          </p>
        </div>
        <div className="donate-container">
          <Form />
        </div>
      </Layout>
    </>
  );
}

export default Donate;
