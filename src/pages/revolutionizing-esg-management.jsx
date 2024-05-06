import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import BlogRelated from "@/components/blog/BlogRelated";
import BlogRelated1 from "@/components/blog/BlogRelated1";

const BlogDetailsOne = () => {
  return (
    <>
      <Head>
        <title>Revolutionizing ESG Management</title>
        <meta name="description" content="Blog Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <BlogDetails1 />
          <BlogRelated1 />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogDetailsOne;
