import ProjectViewList from '@src/components/ProjectViewList'
import Header from '@src/components/Header'
import Footer from '@src/components/Footer'
import { styled, mediaMap } from '@src/styles/stitchesStyles'
import { PageMetadata } from '@src/types/HeadMetadata';


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

const metadata: PageMetadata  = {
  title: null,
};
function HomePage() {

  return (
    <div id="index">

      <Header type="index" />

      <div className="container" >

        <BigTitle media={mediaMap}>{'Experimental Visual,\nMotion Graphics, Generative Art,\nDigital Product Design'}</BigTitle>
        <ProjectViewList tag="default"></ProjectViewList>
      </div>

      <Footer />

    </div>
  )
}

const page = {
  metadata: metadata,
  element: HomePage,
};

export default page;
