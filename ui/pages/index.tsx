import React, { useEffect, useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Landing from "./landing";
import { useRouter } from "next/router";
import AuthContext from "../context/auth";

const Home: NextPage = () => {
  const router = useRouter();
  const { loggedIn } = useContext(AuthContext);
  // useEffect(() => {
  //   if (loggedIn) {
  //     router.push("/dashboard");
  //   }
  // }, []);
  return (
    <div>
      <Head>
        <title>CakeBaker</title>
        <meta name="description" content="Demo App for CakeBaker" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#5e1111" />
      </Head>
      <Landing />
    </div>
  );
};

export default Home;
