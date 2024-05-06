import Benefit from "@/components/LandManamement/Benefit";
import RootLayout from "@/components/common/layout/RootLayout";

import Head from "next/head";

const benefitsOfPartnering = () => {
  return (
    <>
      <Head>
        <title>Benefits Partnering</title>
        <meta name="description" content="Contact Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <Benefit />
        </RootLayout>
      </main>
    </>
  );
};

export default benefitsOfPartnering;
