import RootLayout from "@/components/common/layout/RootLayout";
import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";

const ForgetPassword = () => {
  const charAnim = useRef();
  const wordAnim = useRef();

  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Head>
        <title>Forget Password</title>
        <meta name="description" content="Service Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <div className="container">
            <div className="login-wrapper">
              <div className="row login__btm">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <div className="login__info">
                    <p ref={wordAnim}>Enter your email address, we will send you a link to setup a new password.</p>
                    <h5 ref={wordAnim} className="signup-today">
                      Forget Password
                    </h5>
                  </div>
                </div>

                <div className="col-xl-5 col-lg-5 col-md-6">
                  <div className="login__form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row g-3">
                        <div className="col-12">
                          <Controller name="email" defaultValue="" control={control} rules={{ required: "Email is required" }} render={({ field }) => <input {...field} type="email" placeholder="Email" />} />
                          {errors.email && <span>{errors.email.message}</span>}
                        </div>
                      </div>
                      {/* <div>
                        <small>
                          Don't have an account? Please <Link href="/register">SignUp</Link>
                        </small>
                      </div> */}
                      <div className="row g-3">
                        <div className="col-12">
                          <div className="btn_wrapper">
                            <button className="wc-btn-primary btn-hover btn-item" type="submit">
                              <span></span> Submit
                              <br />
                              <i className="fa-solid fa-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RootLayout>
      </main>
    </>
  );
};

export default ForgetPassword;
