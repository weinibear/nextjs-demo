import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Page2() {
  const router = useRouter();

  return (
    <>
      <h2>page2</h2>
      <button
        onClick={() => {
          router.replace(`/page1`);
        }}
      >
        router.replace到page1
      </button>

      <button
        onClick={() => {
          router.replace(`${process.env.NEXT_PUBLIC_BASE_URL}/`);
        }}
      >
        router.replace返回到/
      </button>
    </>
  );
}
