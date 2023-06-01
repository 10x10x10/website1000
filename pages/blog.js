import ProjectViewList from './components/ProjectViewList.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HeadMeta from './components/HeadMeta.js'
import EmbedVideo from './components/EmbedVideo.js'
import { projectData } from '../data.js'
import { styled, mediaMap } from '../styles/stitchesStyles.js'


const BigTitle = styled('h1', {
  display: 'flex',
  flexGrow: 1,
  width: '100%',
  color: '#fff',
  fontFamily: 'Manrope',
  fontWeight: 700,
  lineHeight: 1.2,
  whiteSpace: 'pre-line',
  variants: {
    media: {
      s: {
        fontSize: 32,
        margin: '64px 0 32px',
      },
      l: {
        fontSize: 64,
        margin: '120px 0',
      },
    },
  },
});

export default function BlogPage() {

  return (
    <div id="blog">

      <HeadMeta type="blog" />

      <Header type="blog" />

      <div className="container" >

        <BigTitle media={mediaMap}>{'Blog'}</BigTitle>
        <ProjectViewList type="blog"></ProjectViewList>
      </div>

      <Footer />

    </div>
  )
}
