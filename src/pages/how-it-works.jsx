import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Service1 from "@/components/service/Service1";
import ServiceBrand from "@/components/brand/ServiceBrand";
import ServiceHero from "@/components/hero/ServiceHero";
import FeaturedBusiness from "@/components/team/FeaturedBusiness";
import LandManagement from "@/components/hero/LandManagement";
import DigitalMarketingAbout from "@/components/about/DigitalMarketingAbout";

const Service = () => {
  return (
    <>
      <Head>
        <title>How It Works</title>
        <meta name="description" content="Service Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ServiceHero />
          <Service1 />
          <DigitalMarketingAbout />
          <LandManagement />
          <div style={{ marginTop: "-5rem" }}>
            <FeaturedBusiness />
          </div>
          <ServiceBrand />
        </RootLayout>
      </main>
    </>
  );
};

export default Service;
