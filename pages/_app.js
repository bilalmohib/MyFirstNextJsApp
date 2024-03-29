import Head from "next/head";
import '../styles/globals.css'

import "react-image-gallery/styles/css/image-gallery.css";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      {/* <!-- Font Awesome --> */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        rel="stylesheet"
      />
      {/* <!-- Google Fonts --> */}
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
      />
      {/* <!-- MDB --> */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.css"
        rel="stylesheet"
      />
      {/* <!-- MDB --> */}
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.js"
      ></script>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
