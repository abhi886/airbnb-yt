import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>AirBnb Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* header */}
      <Header />
      {/* banner */}
    </>
  );
}
