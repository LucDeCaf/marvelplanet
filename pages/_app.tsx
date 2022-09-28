import "../styles/globals.css";
import "@fontsource/itim";
import "@fontsource/karla/400.css";
import "@fontsource/karla/500.css";
import "@fontsource/karla/600.css";
import "@fontsource/karla/700.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Navbar from "layout/Navbar";
import Footer from "layout/Footer";
import { AuthProvider } from "lib/AuthContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <title>Marvel Planet</title>
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}

export default App;
