import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import ImpactDirectoryHero from "@/components/service/ImpactDirectoryHero";
import FeaturedBusiness from "@/components/team/FeaturedBusiness";

const ServiceV4 = () => {
  return (
    <>
      <Head>
        <title>Impact Directory</title>
        <meta name="description" content="Service V4 Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ImpactDirectoryHero />
          <FeaturedBusiness/>
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceV4;
