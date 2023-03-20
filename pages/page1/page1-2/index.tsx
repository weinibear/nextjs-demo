import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Page11() {
  const router = useRouter();
  return (
    <>
      <h1>page1-2</h1>
      <div>page1-2</div>
      <button
        onClick={() => {
          router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/page1/page1-1`);
        }}
      >
        router.push到page1-1
      </button>

      <button
        onClick={() => {
          router.push(`./page1-1`);
        }}
      >
        router.push到./page1-1
      </button>
    </>
  );
}
