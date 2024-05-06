import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import BlogDetail3 from "@/components/blog/BlogDetails3";
import BlogRelated3 from "@/components/blog/BlogRelated3";

const BlogDetailsTwo = () => {
  return (
    <>
      <Head>
        <title>QUDEX Alpha Launch: A Scientific Odyssey into AI-Driven Biodiversity Conservation</title>
        <meta name="description" content="Blog Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <BlogDetail3 />
          <BlogRelated3 />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogDetailsTwo;
