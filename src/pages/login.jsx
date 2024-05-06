import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import SignIn from "@/components/auth/SignIn";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Service Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <SignIn />
        </RootLayout>
      </main>
    </>
  );
};

export default Login;
