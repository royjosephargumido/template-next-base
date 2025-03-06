import Script from "next/script";

interface ITawkto {
  source: string;
}

export function Tawkto({ source }: ITawkto) {
  return <Script strategy="lazyOnload" src={source} crossOrigin="anonymous" />;
}
