import About from '@src/components/About'
import Header from '@src/components/Header'
import Footer from '@src/components/Footer'
import { PageMetadata } from '@src/types/HeadMetadata';

const metadata: PageMetadata  = {
  title: "About"
};
export const routeMeta = { type: 'about' }

function AboutPage() {
  return (
    <div>


      <Header type="about" />
      <div className="container" >
        <About></About>
      </div>
      <Footer />

    </div>
  )
}

const page = {
  metadata: metadata,
  element: AboutPage,
};

export default page;
