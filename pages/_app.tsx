import Layout from "../components/Page/Layout";
import { ThemeProvider } from 'next-themes'
import "../styles/app.scss";


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
  );
} 

export default MyApp;
