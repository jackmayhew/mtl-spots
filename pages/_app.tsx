import Layout from "../components/Page/Layout";
import { ThemeProvider } from "next-themes";
// import { UserProvider } from "@auth0/nextjs-auth0";
import "../styles/app.scss";

function MyApp({ Component, pageProps }) {
  return (
    // <UserProvider >
      <ThemeProvider attribute="class" defaultTheme="light">
        <Layout titles={Component.title}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    // </UserProvider>
  );
}

export default MyApp;
