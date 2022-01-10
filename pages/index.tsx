import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const locale = 'en'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4085936357096708" crossorigin="anonymous"></script> */}
        <title>Total Daily Energy Expenditure (TDEE) & Macros Calculator | Fitness | Bulking | Cutting</title>
        <meta property="og:title"  content="Total Daily Energy Expenditure (TDEE) & Macros Calculator | Fitness | Bulking | Cutting" />
        <meta name="description" content="Calculate how many calories you burn every day, and learn how much Macros (carbs, fat and protein) you need to consume per day based on your Bulking/Cutting goal." />
        <meta property="og:description" content="Calculate how many calories you burn every day, and learn how much Macros (carbs, fat and protein) you need to consume per day based on your Bulking/Cutting goal." />
        <link rel="shortcut icon" href="https://www.calculatemacro.com/favicon.ico"/><link rel="icon" href="https://www.calculatemacro.com/favicon.ico"/><link rel="apple-touch-icon" href="https://www.calculatemacro.com/favicon.png" type="image/png"/>
        <link rel="alternate" hreflang="en" href='https://www.calculatemacro.com/' />
        <link rel="alternate" hreflang="zh" href='https://www.calculatemacro.com/zh-tw' />
        <link rel="alternate" hreflang="zh-TW" href='https://www.calculatemacro.com/zh-tw' />
        <link rel="alternate" hreflang="zh-HK" href='https://www.calculatemacro.com/zh-hk' />
        <link rel="alternate" hreflang="zh-CN" href='https://www.calculatemacro.com/zh-cn' />
        <link rel="alternate" hreflang="x-default" href='https://www.calculatemacro.com/' />
      </Head>

      <Header locale={locale} />

      <Main locale={locale} />

      <Footer locale={locale} />
    </div>
  )
}

export default Home
