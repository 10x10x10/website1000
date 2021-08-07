import Head from 'next/head'
import About from './components/About.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

export default function AboutPage() {
  const title = "About | 1000 Cheng";
  return (
    <div>

      <Head>
        <title>{title}</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/icons/logo_32.png" />
      </Head>
      
      <Header location="/about" title={title} />
      <div className="container" >
        <About></About>
      </div>
      <Footer />

    </div>
  )
}
