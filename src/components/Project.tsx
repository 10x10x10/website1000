import React from "react";
import Header from '@src/components/Header'
import Footer from '@src/components/Footer'
import ProjectViewList from "@src/components/ProjectViewList";
import ServerClientContent from "@src/components/ServerClientContent";

type ProjectProps = {
  children: React.ReactNode
  showOtherProject?: boolean
}

export default function Project({
  children,
  showOtherProject = true,
}: ProjectProps) {

  return (
    <div className="convert-selection">

      <Header />

      <div className="container" >
        <article className="project-container">

          {children}

          {showOtherProject && (
            <div className="related-project-container">
              <div className="project-text-container project-view-title">
                <h2>Other Projects</h2>
                <ServerClientContent
                  serverContent={<></>}
                  clientContent={
                    <ProjectViewList
                      tag="default"
                      randomPick={3} />
                  }
                />
              </div>
            </div>)}

        </article>
      </div>

      <Footer />

    </div>);
}