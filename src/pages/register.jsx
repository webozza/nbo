import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import SignUp from "@/components/auth/SignUp";

const Register = () => {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Service Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <SignUp />
        </RootLayout>
      </main>
    </>
  );
};

export default Register;
