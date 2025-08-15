import Script from 'next/script';

type ITawkto = {
  source: string;
};

export function Tawkto({ source }: ITawkto) {
  return <Script crossOrigin="anonymous" src={source} strategy="lazyOnload" />;
}
