import Potential from "@/components/LandManamement/Potential";
import RootLayout from "@/components/common/layout/RootLayout";
import Head from "next/head";
import React from "react";

const potentialOutcomes = () => {
  return (
    <>
      <Head>
        <title>Potential Outcomes</title>
        <meta name="description" content="Contact Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <Potential />
        </RootLayout>
      </main>
    </>
  );
};

export default potentialOutcomes;
