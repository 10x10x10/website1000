import React from "react"
import HeadMeta from "@src/components/HeadMeta"
import Project from "@src/components/Project"
import { HeadMetadata, PageMetadata, ProjectMetadata } from "@src/types/HeadMetadata";
import { PageModule, Page } from "@src/types/PageModule"
import { renderTreeArray, parseProjectContent, safeParseProjectContent, type ProjectContent } from "@1000website/shared"
import page404 from "../pages/404"

function formatParseError(error: unknown): string {
  const formatPath = (path: Array<string | number> = []) =>
    path.length > 0 ? path.map(String).join(".") : "(root)";

  const formatIssue = (issue: any): string[] => {
    if (issue == null) {
      return [String(issue)]
    }

    if (Array.isArray(issue)) {
      return issue.flatMap(formatIssue)
    }

    if (typeof issue === "object") {
      if (Array.isArray(issue.issues)) {
        return issue.issues.flatMap(formatIssue)
      }

      if (Array.isArray(issue.errors)) {
        return issue.errors.flatMap(formatIssue)
      }

      if (typeof issue.message === "string") {
        const path = Array.isArray(issue.path) ? formatPath(issue.path) : "(root)"
        const details: string[] = []

        if (issue.code === "invalid_type" && "expected" in issue && "received" in issue) {
          details.push(`expected ${issue.expected}, received ${issue.received}`)
        }

        if (issue.code === "unrecognized_keys" && Array.isArray(issue.keys)) {
          details.push(`unexpected keys: ${issue.keys.join(", ")}`)
        }

        const suffix = details.length ? ` (${details.join("; ")})` : ""
        return [`${path}: ${issue.message}${suffix}`]
      }
    }

    return [String(issue)]
  }

  return formatIssue(error).join("\n")
}

function routeError(message: string) {
  console.error(`\x1b[31m${message}\x1b[0m`)
}

const metadata404 = page404.metadata
const Page404Component = page404.element;


type RouteWrapperProps = {
  Component: React.ComponentType<{}>
  metadata: HeadMetadata
}

function RouteWrapper({ Component, metadata }: RouteWrapperProps) {
  return (
    <>
      {metadata ? <HeadMeta metadata={metadata} /> : null}
      <Component />
    </>
  )
}


const pageDir = "../pages";

const pageModules = import.meta.glob([
  `../pages/**/*.tsx`,
  `!../pages/**/~*.tsx`,
  `!../pages/**/~*/*`,
], { eager: true }) as Record<string, PageModule>

const jsonProjectModules = import.meta.glob(
  `../content/projects/**/*.json`,
  { eager: true },
) as Record<string, { default: unknown }>;

const getModuleMetadata = (mod: PageModule): Page["metadata"] | undefined => {
  return mod.default?.metadata
}

export type JsonProjectData = ProjectContent

const getModuleComponent = (mod: PageModule): Page["element"] | undefined => {
  return mod.default?.element
}

const getRouteFromFile = (filePath: string, pagesPath: string): string | null => {
  const normalize = (value: string) => value.replace(/\\/g, "/").replace(/(^\.\/?|^\/+)/, "").replace(/\/+$/, "")
  const normalizedFile = normalize(filePath)
  const normalizedPages = normalize(pagesPath)

  const route = normalizedFile
    .slice(normalizedPages.length + 1)
    .replace(/\.(tsx|ts|jsx|js|mdx|json)$/, "");

  if (route === "index")
    return "/"
  if (route === "404")
    return "/404"
  return "/" + route
}

type PageRouteInfo = {
  type: "page"
  path: string
  metadata: PageMetadata
  element: React.JSX.Element
}

type ProjectRouteInfo = {
  type: "project"
  path: string
  metadata: ProjectMetadata
  element: React.JSX.Element
}

type RouteInfo = PageRouteInfo | ProjectRouteInfo

const createPageRoute = (filePath: string, mod: PageModule): PageRouteInfo | null => {
  const component = getModuleComponent(mod)
  if (!component) {
    routeError(`[ROUTE] ${filePath} has no export default or page.element`);
    return null;
  }

  const metadata = getModuleMetadata(mod);
  if (!metadata) {
    routeError(`[ROUTE] ${filePath} has no export routeMeta or metadata`);
    return null;
  }

  const routeFromFile = getRouteFromFile(filePath, pageDir)
  if (!routeFromFile) {
    routeError(`[ROUTE] ${filePath} can not get route path`);
    return null;
  }

  return {
    type: "page",
    path: routeFromFile,
    metadata: metadata as PageMetadata,
    element: <RouteWrapper Component={component} metadata={metadata} />,
  }
}

const createProjectRoute = (filePath: string, mod: PageModule): ProjectRouteInfo | null => {
  const component = getModuleComponent(mod)
  if (!component) {
    routeError(`[ROUTE] ${filePath} has no export default or page.element`);
    return null;
  }

  const metadata = getModuleMetadata(mod);
  if (!metadata) {
    routeError(`[ROUTE] ${filePath} has no export routeMeta or metadata`);
    return null;
  }

  const routeFromFile = getRouteFromFile(filePath, pageDir)
  if (!routeFromFile) {
    routeError(`[ROUTE] ${filePath} can not get route path`);
    return null;
  }

  return {
    type: "project",
    path: routeFromFile,
    metadata: metadata as ProjectMetadata,
    element: <RouteWrapper Component={component} metadata={metadata} />,
  }
}

const createJsonProjectRoute = (filePath: string, mod: { default: unknown }): ProjectRouteInfo | null => {
  const parseResult = safeParseProjectContent(mod.default);
  if (!parseResult.success) {
    routeError(`[ROUTE] ${filePath} has invalid project content`);
    routeError(formatParseError(parseResult.error));
    return null;
  }

  const data = parseResult.data;
  const metadata = data.metadata;

  const routeFromFile = getRouteFromFile(filePath, "../content")
  if (!routeFromFile) {
    routeError(`[ROUTE] ${filePath} can not get route path`);
    return null;
  }

  const Component = () => (
    <Project showOtherProject={false}>
      {renderTreeArray(data.tree)}
    </Project>
  );

  return {
    type: "project",
    path: routeFromFile,
    metadata,
    element: <RouteWrapper Component={Component} metadata={metadata} />,
  }
}

const pageRoutes: Array<PageRouteInfo> = Object.entries(pageModules)
  .filter(([filePath, mod]) => getRouteFromFile(filePath, pageDir)?.startsWith("/projects/") === false)
  .map(([filePath, mod]) => createPageRoute(filePath, mod))
  .filter((route) => route !== null)
  .sort((a, b) => a.path.localeCompare(b.path))

const projectRoutesFromPages: Array<ProjectRouteInfo> = Object.entries(pageModules)
  .filter(([filePath, mod]) => getRouteFromFile(filePath, pageDir)?.startsWith("/projects/"))
  .map(([filePath, mod]) => createProjectRoute(filePath, mod))
  .filter((route): route is ProjectRouteInfo => route !== null)
  .sort((a, b) => {
    if (a.metadata.order === b.metadata.order)
      return a.metadata.id.localeCompare(b.metadata.id);
    return a.metadata.order - b.metadata.order;
  });

const projectRoutesFromJson: Array<ProjectRouteInfo> = Object.entries(jsonProjectModules)
  .map(([filePath, mod]) => createJsonProjectRoute(filePath, mod))
  .filter((route): route is ProjectRouteInfo => route !== null)
  .filter((route) => !projectRoutesFromPages.some((existing) => existing.path === route.path))
  .sort((a, b) => {
    if (a.metadata.order === b.metadata.order)
      return a.metadata.id.localeCompare(b.metadata.id);
    return a.metadata.order - b.metadata.order;
  });

const projectRoutes = [...projectRoutesFromPages, ...projectRoutesFromJson];

export const projectMetadataList = projectRoutes.map((route) => ({
  ...route.metadata,
  route: route.path,
}))

const combinedRoutes = [...pageRoutes, ...projectRoutes].sort((a, b) => a.path.localeCompare(b.path))
export const routes: Array<RouteInfo> = [
  ...combinedRoutes,
  {
    type: "page",
    path: "*",
    metadata: metadata404,
    element: <RouteWrapper Component={Page404Component} metadata={metadata404} />,
  },
]

export default routes
