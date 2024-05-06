import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import BlogRelated4 from "@/components/blog/BlogRelated4";
import BlogDetail5 from "@/components/blog/BlogDetails5";
import BlogRelated5 from "@/components/blog/BlogRelated5";

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
          <BlogDetail5 />
          <BlogRelated5 />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogDetailsTwo;
