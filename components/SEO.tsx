import { NextPage } from "next";
import Head from 'next/head'

const SEO = () => {
  return (
    <Head>
      <title>eriko.dev</title>
      <meta property="og:image" content="https://eriko.dev/eriko512logo.png" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="Hi, I'm ErikoXDev." />
      <meta property="og:description" content="I am making various projects using Javascript locally and in the browser. I showcase my programming projects here." />
      <meta property="description" content="I am making various projects using Javascript locally and in the browser. I showcase my programming projects here." />
      <meta property="og:url" content="https://eriko.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="eriko.dev" />
      
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#9f00a7" />
      <meta name="theme-color" content="#ffffff" />


    </Head>
  )
}

export default SEO