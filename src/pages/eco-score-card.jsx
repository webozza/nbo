import Head from "next/head";
import ScoreCard from "@/components/ecoScoreCard/ScoreCard";
import RootLayout from "@/components/common/layout/RootLayout";

const EcoScoreCard = () => {
  return (
    <div>
      <Head>
        <title>Eco Score Card</title>
        <meta name="description" content="Eco Score Card Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="cursor" id="client_cursor">
          Play
        </div>
        <RootLayout header="header1" footer="footer1">
          <ScoreCard />
        </RootLayout>
      </main>
    </div>
  );
};

export default EcoScoreCard;
