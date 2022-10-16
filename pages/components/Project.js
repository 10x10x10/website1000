import React from "react";
import Header from './/Header.js'
import Footer from './/Footer.js'
import HeadMeta from './HeadMeta.js'
import ProjectViewList from ".//ProjectViewList.js";

/**
 * 
 * Project 的統一容器。
 * 
 * @id 指定這個 Project 的 id
 */
export default function Project({
  id,
  children,
  showOtherProject,
}) {

  return (
    <div className="convert-selection">

      <HeadMeta type="project" id={id} />

      <Header />

      <div className="container" >
        <div className="project-container">

          {children}

          {showOtherProject && (<div className="related-project-container">
            <div className="project-text-container project-view-title">
              <h2>Other Projects</h2>
            </div>
            <ProjectViewList
              projectType="default"
              randomPick={3} />
          </div>)}

        </div>
      </div>

      <Footer />

    </div>);
}