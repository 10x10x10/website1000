import { MediaList } from '@1000website/shared'
import Header from '@src/components/Header'
import Footer from '@src/components/Footer'
import { PageMetadata } from '@src/types/HeadMetadata';

const linkQuery = {
  lab01: "https://uploads-ssl.webflow.com/5dec1a83675ba880b87a882b/5eb40c828038fd1f50f1682e_20_lab_004_v2.gif?[1080x1080]",
  lab02: "https://uploads-ssl.webflow.com/5dec1a83675ba880b87a882b/5eb40f9ef3635264e2b1ff9b_20_lab_002_v2.gif?[1080x1080]",
  lab03: "https://uploads-ssl.webflow.com/5dec1a83675ba880b87a882b/5eb39d678cf2c6983311918b_20_lab_005.gif?[1080x1080]",
  lab04: "https://uploads-ssl.webflow.com/5dec1a83675ba880b87a882b/5eb409f5003377e22fc5b1f0_20_lab_001_v2.gif?[1080x1080]",
  lab05: "https://uploads-ssl.webflow.com/5dec1a83675ba880b87a882b/5eb410ba00337706a1c5dc6e_18_lab_006_v2.gif?[1080x1080]",
  lab06: "https://uploads-ssl.webflow.com/5dec1a83675ba880b87a882b/5eb40f28f59523dda4e483f6_20_lab_006_v2.gif?[1080x1080]",
  lab07: "https://uploads-ssl.webflow.com/5dec1a83675ba880b87a882b/5eb40deff59523688ee4781d_19_lab_002_v2.gif?[1080x1080]",
  lab08: "https://uploads-ssl.webflow.com/5dec1a83675ba880b87a882b/5eb411ff70be2a6314ac6f61_19_lab_006_v2.gif?[1080x1080]",
  lab09: "https://uploads-ssl.webflow.com/5dec1a83675ba880b87a882b/5eb4124404ebab6a7e0eafb3_19_lab_008_v2.gif?[1080x1080]",
  lab10: "https://uploads-ssl.webflow.com/5dec1a83675ba880b87a882b/5eb40e5670be2a2cbaac5519_19_lab_013_v2.gif?[1080x1080]",
  lab11: "https://uploads-ssl.webflow.com/5dec1a83675ba880b87a882b/5eb40d0088ad6f22d3a9d48b_19_lab_011_v2.gif?[1080x1080]",
  lab12: "https://uploads-ssl.webflow.com/5dec1a83675ba880b87a882b/5eb412a3e6e68d62d111c85c_20_lab_008_v2.gif?[1080x1080]",
};

const metadata: PageMetadata = {
  title: "Lab"
};
function LabPage() {
  return (
    <div>
      <Header type="lab" />

      <div className="container" >
        <div className="project-container" >
          <MediaList col={4} mCol={2}
            links={[
              linkQuery.lab01,
              linkQuery.lab02,
              // linkQuery.lab03,
              linkQuery.lab04,
              linkQuery.lab05,
              linkQuery.lab06,
              linkQuery.lab07,
              linkQuery.lab08,
              linkQuery.lab09,
              linkQuery.lab10,
              linkQuery.lab11,
              linkQuery.lab12,
            ]} />
        </div>
      </div>

      <Footer />

    </div>
  )
}

const page = {
  metadata: metadata,
  element: LabPage,
};

export default page;
