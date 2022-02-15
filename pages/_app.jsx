import "../styles/globals.css";
import "../styles/dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Context from "../context/context"

function MyApp({ Component, pageProps }) {
  return <Context><Component {...pageProps} /></Context>
}
export default MyApp

