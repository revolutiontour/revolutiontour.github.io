// import { Provider } from "react-redux";
import withReduxSaga from "next-redux-saga";
// import App from 'next/app'
import { wrapper } from '../store';
import "../styles/globals.css";
import "../styles/dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import 'leaflet/dist/leaflet.css'
import { Provider } from "react-redux";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)

