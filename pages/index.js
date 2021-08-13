import ProjectViewList from './components/ProjectViewList.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HeadMeta from './components/HeadMeta.js'
import EmbedVideo from './components/EmbedVideo.js'
import {projectData} from '../data.js'

export default function ProjectPage() {
  return (
    <div id="index">

      <HeadMeta type="index" />

      <Header type="index" />

      <div className="container" >
        <ProjectViewList type="default"></ProjectViewList>
      </div>

      <Footer />

    </div>
  )
}
