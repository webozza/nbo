import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalMarketingHero from "@/components/hero/DigitalMarketingHero";
import DigitalMarketingBrand from "@/components/brand/DigitalMarketingBrand";
import DigitalMarketingAbout from "@/components/about/DigitalMarketingAbout";
import DigitalMarketingService from "@/components/service/DigitalMarketingService";
import DigitalMarketingProtfolio from "@/components/portfolio/DigitalMarketingProtfolio";
import LandManagement from "@/components/hero/LandManagement";
import DigitalMarketingTestimonial from "@/components/testimonial/DigitalMarketingTestimonial";
import DigitalMarketingWorkflow from "@/components/workflow/DigitalMarketingWorkflow";
import DigitalMarketingPrice from "@/components/price/DigitalMarketingPrice";
import DigitalMarketingBlog from "@/components/blog/DigitalMarketingBlog";
import QudexHomeHero from "@/components/hero/QudexHomeHero";
import StartupAgencyHero from "@/components/hero/StartupAgencyHero";

export default function DigitalMarketing() {
  return (
    <div>
      <Head>
        <title>Qudex</title>
        <meta name="description" content="Greening the Future: Nature Based Offsets Amplified by BeyondCarbon+, QUDE™, EcoScoreCard+, and QBOT AI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <QudexHomeHero />
          {/* <DigitalMarketingHero /> */}
          <DigitalMarketingBrand />
          <DigitalMarketingAbout />
          <DigitalMarketingWorkflow />
          <DigitalMarketingService />
          <DigitalMarketingProtfolio />
          <LandManagement />
          {/* <DigitalMarketingTestimonial /> */}
          {/* <DigitalMarketingPrice /> */}
          <DigitalMarketingBlog />
        </RootLayout>
      </main>
    </div>
  );
}
