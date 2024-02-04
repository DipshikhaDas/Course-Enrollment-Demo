import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "@/components/nav-element/Layout";
// import Layout from "@/components/nav-element/Layout";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const router = useRouter();

  const isInitialPage = router.pathname === '/home' || router.pathname === '/login' || router.pathname === '/registration'
  

  return (
    <AppCacheProvider {...props}>
      {!isInitialPage && (
              <Layout>
              <Component {...pageProps} />
            </Layout>
      )}
      {isInitialPage && (
        <Component {...pageProps} />
      )}
    </AppCacheProvider>
  );
}
