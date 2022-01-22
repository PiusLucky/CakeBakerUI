import React, { useState, ChangeEvent, FormEvent } from "react";
import { IRegister, ILogin } from "../../types";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDataService from "../../services/UserService";
import { useRouter } from "next/router";

const Register: React.FC = () => {
  const router = useRouter();
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const [loading, setLoading] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    repeatPassword: "",
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

  const saveUser = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    var data = {
      username: formData.username,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      password: formData.password,
      repeatPassword: formData.repeatPassword,
    };

    UserDataService.create(data)
      .then((response: any) => {
        setLoading(false);
        toast(response.data.msg, emitData);
        UserDataService.authenticate({
          username_email: data.username,
          password: data.password,
        })
          .then((response: any) => {
            router.push("/dashboard");
          })
          .catch((e: any) => {});
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
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-2/6 md:w-1/2  bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col m-auto w-full mt-10 md:mt-0">
            <h2 className="text-white text-lg font-medium title-font mb-5">
              Register
            </h2>
            <form onSubmit={(e) => saveUser(e)}>
              <div className="relative mb-4">
                <label
                  htmlFor="Username"
                  className="leading-7 text-sm text-gray-400"
                  defaultValue=""
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  onChange={handleInputChange}
                  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 rounded border border-gray-600 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  onChange={handleInputChange}
                  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 rounded border border-gray-600 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-400"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
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
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  onChange={handleInputChange}
                  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 rounded border border-gray-600 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="repeatPassword"
                  className="leading-7 text-sm text-gray-400"
                >
                  Repeat Password
                </label>
                <input
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  required
                  onChange={handleInputChange}
                  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 rounded border border-gray-600 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                disabled={loading}
                type="submit"
                className={`text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg ${
                  loading ? "reduce-opc" : ""
                }`}
              >
                {loading ? "Processing..." : "Register"}
              </button>
            </form>
            <p className="text-xs mt-3">
              Already have an account? <Link href="/">Login</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
