import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import { getDonation } from "../../services/donations";

export default function Confirmation() {
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    const apiCall = async () => {
      const data = await getDonation(id);
      console.log(data);
    };
    apiCall();
  }, []);

  return (
    <>
      <Layout>
        <h1>Confirmation</h1>
      </Layout>
    </>
  );
}
