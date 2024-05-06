import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import ServiceV6Hero from "@/components/hero/ServiceV6Hero";
import CareerGallery from "@/components/gallery/CareerGallery";
import ServiceDetailsWorkflow from "@/components/workflow/ServiceDetailsWorkflow";
import ServiceDetailsDevelopment from "@/components/development/ServiceDetailsDevelopment";
import ServiceDetailsService from "@/components/service/ServiceDetailsService";

const ServiceV6 = () => {
  return (
    <div>
      <Head>
        <title>The Platform</title>
        <meta name="description" content="Service V6 Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <ServiceV6Hero />
          <CareerGallery />
          <ServiceDetailsWorkflow />
          <ServiceDetailsDevelopment />
          <ServiceDetailsService />
          {/* <CreativeAgencyService />
          <CreativeAgencyCTA /> */}
        </RootLayout>
      </main>
    </div>
  );
};

export default ServiceV6;
