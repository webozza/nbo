import DigitalAgencyBrand from "@/components/brand/DigitalAgencyBrand";
import RootLayout from "@/components/common/layout/RootLayout";
import AboutCounter from "@/components/counter/AboutCounter";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import AboutHero from "@/components/hero/AboutHero";
import AboutStory from "@/components/story/AboutStory";
import AboutTeam from "@/components/team/AboutTeam";
import AboutTestimonial from "@/components/testimonial/AboutTestimonial";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <AboutHero />
          {/* <DigitalAgencyBrand /> */}
          {/* <AboutCounter /> */}
          <AboutStory />
          <AboutTestimonial />
          <AboutTeam />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
