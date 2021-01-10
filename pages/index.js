import styles from '../styles.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ViewSource from '../components/view-source'

const Index = () => (
  <div className={styles.container}>
    <ViewSource pathname="pages/index.js" />

    <div className={styles.card}>
      <Head>
        <title>OnlyDogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">
        Welcome to <a href="https://onlydogs.vercel.app">OnlyDogs!</a>
      </h1>

      <hr className={styles.hr} />
      <p>
        This is like OnlyFans but like dogs. Woof.
      </p>
      <Image alt="dog 1" src="/dog1.jpg" width={1000} height={1000} />
      <Image src="/dog2.jpg" width={1000} height={1000} />
      <Image src="/dog3.jpg" width={1000} height={1000} />
      <Image src="/dog4.jpg" width={1000} height={1000} />
      <Image src="/dog5.jpg" width={1000} height={1000} />
      <Image src="/dog6.jpg" width={1000} height={1000} />
      <Image src="/dog7.jpg" width={1000} height={1000} />
      <Image src="/dog8.jpg" width={1000} height={1000} />
      <Image src="/dog9.jpg" width={1000} height={1000} />
      <Image src="/dog10.jpg" width={1000} height={1000} />

      <hr className={styles.hr} />
      <h2 id="more">Woof</h2>
      <p>
        Made with love by {' '}
        <a href="https://twitter.com/shardulgo">
          Shardul
        </a>
      </p>
    </div>
  </div>
)

export default Index
