import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // useEffect(() => {
  //   window.addEventListener('beforeunload', () => {
  //     const path = router.pathname;
  //     console.log(path);
  //     if (process.env.NEXT_PUBLIC_BASE_URL && !path.includes(process.env.NEXT_PUBLIC_BASE_URL)) {
  //       router.replace(`${process.env.NEXT_PUBLIC_BASE_URL}path`);
  //     }
  //   });
  // }, []);

  return <Component {...pageProps} />;
}
