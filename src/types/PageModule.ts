import React from "react";
import { PageMetadata, ProjectMetadata } from "./HeadMetadata";

export type Page = {
    metadata: PageMetadata | ProjectMetadata,
    element: React.ComponentType<{}>,
}

export type PageModule = {
    default?: Page,
}