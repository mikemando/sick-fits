/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import Document, { Html, Head, NextScript, Main } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                {/* <Head></Head> */}
                <Main />
                <NextScript />
            </Html>
        );
    }
}
