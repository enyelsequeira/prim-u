import Theme from "../styles/theme/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script 
    strategy='lazyOnload'
    src={'https://www.googletagmanager.com/gtag/js?id=AW-788075148'}/>
  
    <Script 
      strategy='lazyOnload'>
        {
         ' window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-788075148');'
        }
    <Theme>
      <Component {...pageProps} />
    </Theme>
    </>
  );
}
