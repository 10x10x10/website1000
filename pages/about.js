import About from './components/About.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HeadMeta from './components/HeadMeta.js'

export default function AboutPage() {
  return (
    <div>

      <HeadMeta type="about" />

      <Header type="about" />
      <div className="container" >
        <About></About>
      </div>
      <Footer />

    </div>
  )
}
