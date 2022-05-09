import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import "@/styles/globals.scss";

type TNextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout;
};

function MyApp({ Component, pageProps }: TAppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
