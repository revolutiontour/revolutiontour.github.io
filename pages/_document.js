import Document, {Html,Head, Main, NextScript} from 'next/document';
import Script from 'next/script'

export default class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                {/* <script
    type="text/javascript"
    src="https://js.api.here.com/v3/3.1/mapsjs-core.js"
  ></script>
  <script
    type="text/javascript"
    src="https://js.api.here.com/v3/3.1/mapsjs-service.js"
  ></script>
  <script
    type="text/javascript"
    src="https://js.api.here.com/v3/3.1/mapsjs-ui.js"
  ></script>
  <script
    type="text/javascript"
    src="https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"
  ></script>  */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}