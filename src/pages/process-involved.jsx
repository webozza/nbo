import Process from "@/components/LandManamement/Process";
import RootLayout from "@/components/common/layout/RootLayout";
import Head from "next/head";
import React from "react";

const processInvolved = () => {
  return (
    <>
      <Head>
        <title>Process Involved</title>
        <meta name="description" content="Contact Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <Process />
        </RootLayout>
      </main>
    </>
  );
};

export default processInvolved;
