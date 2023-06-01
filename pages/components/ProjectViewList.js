import React from "react";
import Link from "next/link";
import { projectData, } from "../../data.js";
import Media from "./Media.js";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getProjects(projects, projectType = "default", randomPick = 0) {

  let typeProjects = projects.filter((n) => n.type === projectType);

  if (randomPick > 0) {
    var temp_array = [];
    for (var index in typeProjects) {
      temp_array.push(typeProjects[index]);
    }
    shuffle(typeProjects);
    return typeProjects.slice(0, randomPick);
  }

  return typeProjects;
}


function ProjectViewList(props) {
  const { type, randomPick } = props;
  const showProjects = getProjects(projectData.projects, type, randomPick);
  return (
    <div className="project-view-container grid-c grid-c3 m-grid-c m-grid-c1">
      {
        showProjects.map((proj) => {
          return (
            <Link href={proj.link} key={proj.id}>
              <a className="project-view">
                <Media link={proj.cover} classes={["cover"]} />
                <Media link={proj.hover} classes={["hover"]} position={"absolute"} enableLoading={false} />
                <div className="title-container">
                  <h3 className="title">{proj.title}</h3>
                </div>
              </a>
            </Link>
          );
        })
      }
    </div>
  );
}

export default ProjectViewList;