import Head from 'next/head'
import Header from '../components/header'
import Main from '../components/main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Trip to Mars</title>
        <meta name="description" content="Путешествие на Марс с Илоном Маском и SpaceX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="first">
        <header>
          <Header/>
        </header>
        <main>
          <div className="main">
            <Main />
          </div>
        </main>
      </div>
    </>
  )
}
