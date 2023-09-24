import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Head><title>Home</title></Head>
        <h1>Hello Wolrd! Dodi Sutarya</h1>
      </div>
    </>
  );
}
