import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  
   return (
     <div className="container">
       <Head>
         <title>Next.js Starter!</title>
         <title>Aadm Socki - Next.js Starter!</title>
         <link rel="icon" href="/favicon.ico" />
       </Head>

       <main>
         <Header title="Welcome to my app!" />
         <Header title="Welcome to Adam Socki's app!" />
         <p className="description">
           This is Adam Sockis first Page. <code>pages/index.js</code>
         </p>
       </main>
    )
}
