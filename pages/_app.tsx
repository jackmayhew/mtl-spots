import Layout from "../components/Page/Layout";
import { ThemeProvider } from "next-themes";
import "../styles/app.scss";

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider attribute="class" defaultTheme="light">
        <Layout titles={Component.title}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
  );
}

export default MyApp;
