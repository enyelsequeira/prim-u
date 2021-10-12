/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import { useRouter } from "next/router";
import Theme from "../styles/theme/theme";
import * as gtag from "../../lib/gtag";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}
