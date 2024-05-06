"use client";
import animationCharCome from "@/lib/utils/animationCharCome";
import animationWordCome from "@/lib/utils/animationWordCome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";

const SignUp = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isDirty },
    getValues,
  } = useForm();

  const charAnim = useRef();
  const wordAnim = useRef();

  useEffect(() => {
    animationCharCome(charAnim.current);
    animationWordCome(wordAnim.current);
  }, []);

  const handleSignUp = async (data) => {
    const userData = {
      name: data.username,
      email: data.email,
      password: data.password,
    };

    if (!data.username || !data.email || !data.password) {
      setError("Must be provide all credential.");
    }

    try {
      setLoading(true);
      const res = await fetch("api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        setLoading(false);
        reset();
        console.log("Uer registered");
      } else {
        console.log("Something Went wrong!");
        setLoading(false);
      }
    } catch (error) {
      console.log("Something was wrong!", error);
    }
  };

  return (
    <div className="container">
      <div className="register-wrapper">
        <div className="row register__btm">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
            <div className="register__info">
              <p ref={wordAnim}>The QUDEX PLATFORM can also be a valuable resource for conservation organizations and researchers, allowing them to track and monitor land regeneration efforts and the impact on biodiversity and ecosystem health. It will leverage your networks and provide user engagement .</p>
              <h5 ref={wordAnim} className="signup-today">
                SIGN UP TODAY.
              </h5>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
            <div className="register__form">
              <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="row g-3">
                  <div className="col-12">
                    <Controller name="username" control={control} defaultValue="" rules={{ required: "Full Name is required" }} render={({ field }) => <input {...field} type="text" placeholder="Full Name" />} />
                    {errors.username && <span>{errors.username.message}</span>}
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <Controller name="email" control={control} defaultValue="" rules={{ required: "Email is required" }} render={({ field }) => <input {...field} type="email" placeholder="Email" />} />
                    {errors.email && <span>{errors.email.message}</span>}
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <Controller name="phone" control={control} defaultValue="" render={({ field }) => <input {...field} type="tel" placeholder="Phone" />} />
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <Controller name="password" control={control} rules={{ required: "Password is required" }} render={({ field }) => <input {...field} type="password" placeholder="Password" />} />

                    {errors.password && <span>{errors.password.message}</span>}
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-12">
                    <Controller
                      name="confirmPassword"
                      control={control}
                      // defaultValue=""
                      rules={{
                        required: "Confirm Password is required",
                        validate: (value) => value === getValues("password") || "Passwords do not match",
                      }}
                      render={({ field }) => <input {...field} type="password" defaultValue="" placeholder="Confirm Password" />}
                    />
                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                  </div>
                </div>
                <div>
                  <small>
                    Already have an account? Please <Link href="/login">Sign In</Link>
                  </small>
                </div>
                {error && <span>Fiels are require.</span>}
                <div className="row g-3">
                  <div className="col-12">
                    <div className="btn_wrapper">
                      <button className="wc-btn-primary btn-hover btn-item" type="submit" disabled={!isDirty}>
                        <span></span> Register <br />
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
  );
};

export default SignUp;
