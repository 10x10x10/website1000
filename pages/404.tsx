import { type CSSProperties } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '@src/components/Header'
import Footer from '@src/components/Footer'
import ProjectViewList from "@src/components/ProjectViewList";
import error404Anim from "@src/animations/404.json";
import Lottie from 'lottie-react';
import ServerClientContent from '@src/components/ServerClientContent';
import { PageMetadata } from '@src/types/HeadMetadata';


const styleSheet: Record<string, CSSProperties> = {
  dialog: {
    height: 600,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  dialogDescription: {
    textAlign: "center",
    fontSize: "1.5rem",
    margin: " 20px 0",
  },
  anim: {
    padding: "50px 0",
    width: 400,
    height: 800,
    maxWidth: "100vw",
  }
}

const title = "1000 Cheng";
const metadata: PageMetadata = {
  title: title,
};
function Page404() {

  return (
    <div>

      <Helmet>
        <title>{title}</title>
        <link rel="icon" href="/icons/logo_32.png" />
      </Helmet>

      <Header location="" title={title} />

      <div className="container" >
        <div className="project-container">

          <div style={styleSheet.dialog}>
            <ServerClientContent
              serverContent={<div style={styleSheet.anim}></div>}
              clientContent={<Lottie
                animationData={error404Anim}
                loop={true}
                autoplay={true}
                initialSegment={[0, 43]}
                style={styleSheet.anim} />}
            />
            <h3 style={styleSheet.dialogDescription}>Page Not Found</h3>

          </div>

          <div className="related-project-container">
            <ServerClientContent
              serverContent={<></>}
              clientContent={
                <ProjectViewList
                  tag="default"
                  randomPick={6} />
              }
            />
          </div>

        </div>
      </div>

      <Footer />

    </div>
  )
}

const page = {
  metadata: metadata,
  element: Page404,
};

export default page;
