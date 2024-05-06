import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceDetailsDevelopment from "@/components/development/ServiceDetailsDevelopment";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsService from "@/components/service/ServiceDetailsService";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import LandPartnerOne from "@/components/development/LandPartnerOne";
import ManagementFramwork from "@/components/workflow/ManagementFramwork";

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>Land Partner</title>
        <meta name="description" content="Service Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <LandPartnerOne />
          <ManagementFramwork />
        </RootLayout>
      </main>
    </>
  );
};

export default ServiceDetails;
