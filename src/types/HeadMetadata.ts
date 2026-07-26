

export type ProjectMetadata = PageMetadata & {
  id: string,
  cover: string,
  hover: string,
  order: number,
  tags: Array<ProjectTag>,
};

export type PageMetadata = {
  title: string,
};

export type HeadMetadata = ProjectMetadata | PageMetadata;

export type PartialHeadMetadata = Partial<HeadMetadata>;

export type ProjectTag = "default" | "uiux";
