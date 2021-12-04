/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Theme from "../styles/theme/theme";
import * as gtag from "../../lib/gtag";
import { UseIsWindow } from "../hooks/use-is-window";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  UseIsWindow();
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
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </Theme>
  );
}
