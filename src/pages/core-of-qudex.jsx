import QudexOverview from "@/components/ExplainingQudex/QudexOverview";
import RootLayout from "@/components/common/layout/RootLayout";
import KeyMessage from "@/components/ExplainingQudex/KeyMessage";
import Head from "next/head";

const CoreQudex = () => {
  return (
    <>
      <Head>
        <title>How It Works</title>
        <meta name="description" content="Service Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <QudexOverview />
          <KeyMessage />
        </RootLayout>
      </main>
    </>
  );
};

export default CoreQudex;
