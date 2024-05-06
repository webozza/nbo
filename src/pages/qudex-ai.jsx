import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import BlogDetail6 from "@/components/blog/BlogDetails6";
import BlogRelated6 from "@/components/blog/BlogRelated6";

const BlogDetailsTwo = () => {
  return (
    <>
      <Head>
        <title>Decoding Bio Assets: The New Paradigm in Biodiversity Conservation and Business Strategy</title>
        <meta name="description" content="Blog Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <BlogDetail6 />
          <BlogRelated6 />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogDetailsTwo;
