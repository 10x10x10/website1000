import Head from 'next/head'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import ProjectViewList from "./components/ProjectViewList.js";
import error404Anim from "../src/animations/404.json";

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const styleSheet = {
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
    margin:" 20px 0",
  },
  anim: {
    padding: "50px 0",
    width: 400,
    maxWidth: "100vw",
  }
}


export default function custom404() {
  const title = "1000 Cheng";

  return (
    <div>

      <Head>
        <title>{title}</title>
        <link rel="icon" href="/icons/logo_32.png" />
      </Head>

      <Header location="" title={title} />

      <div className="container" >
        <div className="project-container">

          <div style={styleSheet.dialog}>

            <Lottie
              animationData={error404Anim}
              loop={true}
              autoplay={true}
              initialSegment={[0, 43]}
              style={styleSheet.anim} />

            <h3 style={styleSheet.dialogDescription}>Page Not Found</h3>

          </div>

          <div className="related-project-container">
            <ProjectViewList
              projectType="default"
              randomPick={6} />
          </div>

        </div>
      </div>

      <Footer />

    </div>
  )
}
