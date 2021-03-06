// import { Provider } from "react-redux";
import withReduxSaga from "next-redux-saga";
// import App from 'next/app'
import { wrapper } from '../store';
import "../styles/globals.css";
import "../styles/dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import 'leaflet/dist/leaflet.css'
import { Provider } from "react-redux";
import Context from "../context/context"

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  /*  !![NOTICE] REMOVE THIS IF YOU WANT TO DEBUG ON DEV!! */
  console.log = console.warn = console.error = () => {};
  /*  !![END OF NOTICE] REMOVE THIS IF YOU WANT TO DEBUG ON DEV!! */

  return <Context><Component {...pageProps} /></Context>

  // return process.browser ? (
  //   <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
  //     <Component {...pageProps} />
  //   </PersistGate>
  // ) : (
  //   <PersistGate persistor={store}>
  //     <Component {...pageProps} />
  //   </PersistGate>
  // );
}

export default MyApp

