import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
// import Layout from "@/components/nav-element/Layout";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const router = useRouter();

  return (
    <AppCacheProvider {...props}>
      <Component {...pageProps} />
    </AppCacheProvider>
  );
}
