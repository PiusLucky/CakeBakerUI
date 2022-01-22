import React, { useState, ChangeEvent, FormEvent, useContext } from "react";
import { ILogin } from "../../types";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDataService from "../../services/UserService";
import { useRouter } from "next/router";
import AuthContext from "../../context/auth";

const Landing: React.FC = () => {
  const router = useRouter();
  const { loggedIn } = useContext(AuthContext);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const [loading, setLoading] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState({
    username_email: "",
    password: "",
  });

  const emitData: object = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    var data = {
      username_email: formData.username_email,
      password: formData.password,
    };
    UserDataService.authenticate({
      username_email: data.username_email,
      password: data.password,
    })
      .then((response: any) => {
        setLoading(false);
        toast(response.data.msg, emitData);
        router.push("/dashboard");
      })
      .catch((e: any) => {
        setLoading(false);
        toast(e?.response?.data?.msg || "failed", emitData);
      });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className="text-gray-400 bg-gray-900 body-font flex-1">
        <div
          className={`container px-5 ${
            loggedIn ? "py-0" : "py-24"
          } mx-auto flex flex-wrap items-center`}
        >
          {!loggedIn ? (
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <h1 className="title-font font-medium text-3xl text-white">
                Cake Bakery like never before...
              </h1>
              <p className="leading-relaxed mt-4">
                Cake Baker is a Demo App simulating an actual real-life
                application for cake bakery management. It possesses some cool
                features like authentication and authorization. Authenticated
                Users have the privilede to make a cake request and choose the
                build process for the cake like the name to be imprinted on it,
                color, size and also a Paystack payment gateway to simulate
                payment.
              </p>
            </div>
          ) : (
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    Nature cake
                  </h2>
                  <h1 className="text-white text-3xl title-font font-medium mb-4">
                    Start Making Requests...
                  </h1>
                  <div className="flex mb-4">
                    <a className="flex-grow text-pink-400 border-b-2 border-pink-500 py-2 text-lg px-1">
                      Why?
                    </a>
                  </div>
                  <p className="leading-relaxed mb-4">
                    We have over 25+ years of industrial experience in Bakery
                    and Cake management. We got this!
                  </p>
                  <div className="flex border-t border-gray-800 py-2">
                    <span className="text-gray-500">Color</span>
                    <span className="ml-auto text-white">Different</span>
                  </div>
                  <div className="flex border-t border-gray-800 py-2">
                    <span className="text-gray-500">Size</span>
                    <span className="ml-auto text-white">S, M and L</span>
                  </div>
                  <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                    <span className="text-gray-500">Name</span>
                    <span className="ml-auto text-white">Your wish!</span>
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-white">
                      ₦ 20,000
                    </span>
                    <Link href="/dashboard">
                      <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                        Go to dashboard
                      </button>
                    </Link>
                    <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <img
                  alt="ecommerce"
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
                  src={"../../img/image_me.svg"}
                  width={400}
                  height={400}
                />
              </div>
            </div>
          )}
          {!loggedIn && (
            <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-white text-lg font-medium title-font mb-5">
                Login
              </h2>
              <form onSubmit={(e) => loginUser(e)}>
                <div className="relative mb-4">
                  <label
                    htmlFor="username_email"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Username/Email
                  </label>
                  <input
                    type="text"
                    id="username_email"
                    name="username_email"
                    required
                    onChange={handleInputChange}
                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 rounded border border-gray-600 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-gray-400"
                  >
                    password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    onChange={handleInputChange}
                    className={`w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 rounded border border-gray-600 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                      loading ? "reduce-opc" : ""
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
                >
                  {loading ? "Processing..." : "Login"}
                </button>
              </form>
              <p className="text-xs mt-3">
                Your first time? <Link href="/register">Sign up</Link>
              </p>
            </div>
          )}
          <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
                  Features
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                  Here are some of the features for the CakeBaker software.
                </p>
              </div>
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="text-pink-400 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium text-white">
                      Basic Authentication
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="text-pink-400 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium text-white">
                      Make a Request
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="text-pink-400 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium text-white">
                      Generate Receipts
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="text-pink-400 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium text-white">
                      Check Order
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="text-pink-400 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium text-white">
                      Profile
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="text-pink-400 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium text-white">
                      A user-friendly dashboard
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Landing;
