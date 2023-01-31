import "../index.css";
import Head from "next/head";
import Footer from "../components/Main/Footer/Footer";
import Navbar from "../components/Main/Navbar/Navbar";
import { Jost } from "@next/font/google";

const jost = Jost({
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --jost-font: ${jost.style.fontFamily};
          }
        `}
      </style>

      <Head>
        <title>Gregor Nelson | Software Developer</title>
        <meta name="title" content="Gregor Nelson | Software Developer" />
        <meta
          name="description"
          content="Gregor Nelson is a Software Developer from Aberdeen Scotland. And is pursuing his undergraduate from University Of Aberdeen."
        />
        <meta
          name="keywords"
          content="Gregor Nelson, Software Developer , Web Development Freelancer, Web Developer"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="Gregor Nelson" />
        <meta httpEquiv="content-language" content="en" />
      </Head>

      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}
export default MyApp;
