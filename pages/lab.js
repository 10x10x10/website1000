import MediaList from './components/MediaList.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HeadMeta from './components/HeadMeta.js'

export default function LabPage() {
  return (
    <div>

      <HeadMeta type="lab" />

      <Header type="lab" />

      <div className="container" >
        <div className="project-container">
          <MediaList col={4} mCol={2}
            links={[
              "lab.lab01",
              "lab.lab02",
              //"lab.lab03",
              "lab.lab04",
              "lab.lab05",
              "lab.lab06",
              "lab.lab07",
              "lab.lab08",
              "lab.lab09",
              "lab.lab10",
              "lab.lab11",
              "lab.lab12",
            ]} />
        </div>
      </div>
      
      <Footer />

    </div>
  )
}
