import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import styles from '../../styles/alert.module.css';
import cn from 'classnames/bind';

const type = 'success';

export default function FirstPost() {
  return (
    <>
    <Layout>
      <Head>
        <title>First Post Hooray</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1 className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}>
        First Post
      </h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
      <Image
        src="/images/pfp.PNG" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Profile Picture"
        />
    </>
  );
}