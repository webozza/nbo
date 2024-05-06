import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import BlogRelated from "@/components/blog/BlogRelated";
import BlogDetail2 from "@/components/blog/BlogDetails2";
import BlogRelated2 from "@/components/blog/BlogRelated2";

const BlogDetailsTwo = () => {
  return (
    <>
      <Head>
        <title>Embrace Bio Assets with QUDEX</title>
        <meta name="description" content="Blog Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <BlogDetail2 />
          <BlogRelated2 />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogDetailsTwo;
