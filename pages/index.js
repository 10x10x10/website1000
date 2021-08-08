import ProjectViewList from './components/ProjectViewList.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HeadMeta from './components/HeadMeta.js'

export default function ProjectPage() {
  return (
    <div>

      <HeadMeta type="index" />

      <Header type="index" />

      <div className="container" >
        <ProjectViewList type="default"></ProjectViewList>
      </div>

      <Footer />

    </div>
  )
}
