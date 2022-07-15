import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Aadm Socki - Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Adam Socki's app!" />
        <p className="description">
          This is Adam Sockis first Page. 
        </p>
      </main>

      <Footer />
    </div>
  )
}
