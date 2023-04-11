
export type ProjectData = {
    projects: ProjectItemData[];

}

export type ProjectItemData = {
    id: string;
    title: string;
    link: string;
    cover: string;
    hover: string;
    type: 'default' | 'uiux';
}


export type MetaItemData = {
    title: string;
    description: string;
    author: string;
    icon: string;
    ogType: string;
    ogImage: string;
    ogSiteName: string;
    ogUrl: string;
};
export type MetaData = {
    defaultProjectMetaData: MetaItemData;
    aboutMetaData: Partial<MetaItemData>;
    labMetaData: Partial<MetaItemData>;
    indexMetaData: Partial<MetaItemData>;
}