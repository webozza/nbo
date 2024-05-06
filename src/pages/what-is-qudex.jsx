import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import QudexHero from "@/components/hero/QudexHero";
import QudexAgencyPortfolio from "@/components/portfolio/QudexAgencyPortfolio";
import QudexAttributes from "@/components/work/QudexAttributes";
import QudexBioAssets from "@/components/work/QudexBioAssets";
import QudexCarbonValue from "@/components/work/QudexCarbonValue";
import QudexBusiness from "@/components/work/QudexBusiness";

const ModernAgency = () => {
  return (
    <div>
      <Head>
        <title>What Is QUDE™</title>
        <meta name="description" content="Modern Agency Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <QudexHero />
          <QudexAgencyPortfolio />
          <QudexAttributes />
          <QudexBioAssets />
          <QudexCarbonValue />
          <QudexBusiness />
        </RootLayout>
      </main>
    </div>
  );
};

export default ModernAgency;
