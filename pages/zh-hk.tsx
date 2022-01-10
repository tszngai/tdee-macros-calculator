import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const locale = 'zh-hk'

const HomeCantonese: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>每日總消耗熱量(TDEE)和營養素(Macros)計算器 | 健身 | 增肌減脂</title>
        <meta property="og:title"  content="每日總消耗熱量(TDEE)和營養素(Macros)計算器 | 健身 | 增肌減脂" />
        <meta name="description" content="依個計算器可以幫你準確計出你每日消耗嘅總熱量，並根據你增肌（bulking）或減脂（cutting）嘅目標，計出你每日應該攝取幾多碳水，脂肪同埋蛋白質（巨量營養素）。" />
        <meta property="og:description" content="依個計算器可以幫你準確計出你每日消耗嘅總熱量，並根據你增肌（bulking）或減脂（cutting）嘅目標，計出你每日應該攝取幾多碳水，脂肪同埋蛋白質（巨量營養素）。" />
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

export default HomeCantonese
