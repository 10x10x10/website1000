import React from "react";
import { Link } from "react-router-dom";
import { Media } from "@1000website/shared";
import { projectMetadataList } from '@src/routes';
import { ProjectMetadata, ProjectTag } from "@src/types/HeadMetadata";

type ProjectEntry = ProjectMetadata & {
  route: string
}

type ProjectViewListProps = {
  tag?: ProjectTag
  randomPick?: number
}

type ProjectViewListState = {
  showProjects: ProjectEntry[]
}

const routeToPath = (route?: string): string => {
  if (!route) return "/"
  if (route === "/") return "/"
  return route
}

function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getProjects(
  projects: ProjectEntry[],
  projectTag: ProjectTag = "default",
  randomPick = 0,
): ProjectEntry[] {
  const tagProjects = projects.filter((n) => n.tags.includes(projectTag));

  if (randomPick > 0) {
    const tagProjectsCopy = [...tagProjects];
    shuffle(tagProjectsCopy);
    return tagProjectsCopy.slice(0, randomPick);
  }

  return tagProjects;
}

export default class ProjectViewList extends React.Component<ProjectViewListProps, ProjectViewListState> {
  constructor(props: ProjectViewListProps) {
    super(props);

    const {
      tag = props.tag ?? "default",
      randomPick = 0,
    } = this.props;

    this.state = {
      showProjects: getProjects(
        projectMetadataList,
        tag,
        randomPick),
    }
  }

  render() {
    const { showProjects } = this.state;

    return (
      <div className="project-view-container grid-c grid-c3 m-grid-c m-grid-c1">
        {showProjects.map((proj) => (
          <Link to={routeToPath(proj.route)} key={proj.id} className="project-view">
            <Media link={proj.cover} classes={["cover"]} />
            <Media link={proj.hover} classes={["hover"]} position="absolute" enableLoading={false} />
            <div className="title-container">
              <h3 className="title">{proj.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
