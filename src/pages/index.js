import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import DigitalMarketingHero from "@/components/hero/DigitalMarketingHero";
import DigitalMarketingBrand from "@/components/brand/DigitalMarketingBrand";
import DigitalMarketingAbout from "@/components/about/DigitalMarketingAbout";
import DigitalMarketingService from "@/components/service/DigitalMarketingService";
import DigitalMarketingProtfolio from "@/components/portfolio/DigitalMarketingProtfolio";
import DigitalMarketingTestimonial from "@/components/testimonial/DigitalMarketingTestimonial";
import DigitalMarketingWorkflow from "@/components/workflow/DigitalMarketingWorkflow";
import DigitalMarketingPrice from "@/components/price/DigitalMarketingPrice";
import DigitalMarketingBlog from "@/components/blog/DigitalMarketingBlog";
import LandManagement from "@/components/hero/LandManagement";
import ManagementFramwork from "@/components/workflow/ManagementFramwork";
// testing auto deployment

const Index = () => {
  return (
    <div>
      <Head>
        <title>Qudex</title>
        <meta name="description" content="Digital Marketing Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <DigitalMarketingHero />
          {/* <LandManagement /> */}
          <div style={{marginTop:"4rem"}}>
          <ManagementFramwork />
          </div>
          <DigitalMarketingBrand />
          <DigitalMarketingAbout />
          <DigitalMarketingWorkflow />
          {/* <DigitalMarketingService /> */}
          <DigitalMarketingProtfolio />
          {/* <DigitalMarketingTestimonial /> */}
          {/* <DigitalMarketingPrice /> */}
          <DigitalMarketingBlog />
        </RootLayout>
      </main>
    </div>
  );
};

export default Index;
