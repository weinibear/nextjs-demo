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
      <h1>page1-1</h1>
      <div>page1-1</div>
      <button
        onClick={() => {
          router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/page2`);
        }}
      >
        router.push到page2
      </button>
    </>
  );
}
