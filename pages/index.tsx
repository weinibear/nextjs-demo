import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='icon'
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/favicon.ico`}
        />
      </Head>
      <main className={styles.main}>
        <div>haha</div>
        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/react.ico`} alt='' />
        <button
          onClick={() => {
            window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/page1`;
          }}
        >
          window.location.href跳转至page1
        </button>
        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/page1`}>
          link跳转至page1
        </Link>
        <button
          onClick={() => {
            window.open(`${process.env.NEXT_PUBLIC_BASE_URL}/page1`);
          }}
        >
          window.open page1
        </button>
        <button
          onClick={() => {
            router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/page1`);
          }}
        >
          router.push page1
        </button>

        <button
          onClick={() => {
            router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/page1/page1-1`);
          }}
        >
          router.push page1-1
        </button>

        <button
          onClick={() => {
            router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/page1/page1-2`);
          }}
        >
          router.push page1-2
        </button>
      </main>
    </>
  );
}
