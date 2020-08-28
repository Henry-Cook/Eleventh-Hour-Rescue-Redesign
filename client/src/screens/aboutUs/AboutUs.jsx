import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout.jsx";
import Locations from "../../components/locations/Locations";
import Impact from "../../components/impact/Impact";
import Stories from "../../components/stories/Stories";
import Leadership from "../../components/leadership/Leadership";
import QuickLinks from "../../components/quicklinks/QuickLinks";
import "./aboutus.css";

export default function AboutUs() {
  const [bool, setBool] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout>
        <div className="container">
          <div className="quick-links">
            <QuickLinks />
          </div>
          <div className="everything">
            <a id="mission1"></a>
            <h1 className="aboutus" id="mission1">
              About Us
            </h1>
            <div className="mission">
              <h4>MISSION</h4>
              <p className="mission-text">
                Eleventh Hour Rescue is a fully registered 501C(3), nonprofit,
                100% no-kill, volunteer based organization dedicated to saving
                the lives of innocent dogs and cats on death row. Many of them
                are rescued at their Eleventh Hour--when they are scheduled to
                be put to death by other shelters that can no longer care for
                them. We give our dogs and cats all the medical attention they
                require, a place to live, and through our extensive adoption
                services, a second chance at a happy and fulfilled life. We rely
                solely on the generosity of our volunteers, the community and
                animal lovers everywhere.
              </p>
            </div>

            <a id="impact1"></a>
            <h4 className="impact-title">IMPACT</h4>
            <div className="impact" id="impact1">
              <Impact />
            </div>

            <a id="stories1"></a>
            <h4 className="adoption-title">ADOPTION STORIES</h4>
            <div className="stories" id="stories1">
              <Stories />
            </div>

            <a id="leadership5"></a>
            <h4 className="leadership-title">LEADERSHIP</h4>
            <div className="leadership">
              <Leadership />
            </div>

            <a id="locations1"></a>
            <div className="locations" id="locations1">
              <h4 className="location-title">LOCATIONS</h4>
              <Locations />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
