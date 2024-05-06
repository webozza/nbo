import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import QudexBlog from "@/components/blog/QudexBlog";

const Blog = () => {
  return (
    <>
      <Head>
        <title>QBlog</title>
        <meta name="description" content="Blog Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <QudexBlog />
        </RootLayout>
      </main>
    </>
  );
};

export default Blog;
