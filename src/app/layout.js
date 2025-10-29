// app/layout.js
// import "./globals.css";
import Head from "next/head";
// import Script from "next/script";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '@/app/assets/css/adminlte.css';


export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NextAdminLTE Dashboard</title>
      </Head>
      <body>
        {children}
        {/* <Script src="/adminlte/js/adminlte.min.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
