import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function NotMatch() {
  const router = useRouter();

  useEffect(() => {
    const href = window.location.href;
    console.log('asPath:' + router.asPath);
    console.log('pathname:' + router.pathname);
    console.log('basePath:' + router.basePath);
    console.log('href:' + href);
    if (
      process.env.NEXT_PUBLIC_BASE_URL &&
      !href.includes(process.env.NEXT_PUBLIC_BASE_URL)
    ) {
      const path = href.split(process.env.NEXT_PUBLIC_SERVER_URL || '')[1];
      console.log('path:' + path);
      window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
    }
  }, []);

  return <div>咦，你想找的页面找不到了</div>;
}
