export interface INews {
    id: number,
    title: string,
    description: string,
    url: string,
    ariaLabel: string,
    home: boolean,
    top3: boolean,
    latest: boolean,
    images: IImageMap | null,
}

export interface IImageMap {
    desktop: string;
    mobile: string | undefined;
    alt: string | undefined;
}

export type NewsContextType = {
    news: INews[] | null;
    getHomeNews: () => INews;
    getTopNews: () => INews[];
    getLatestNews: () => INews[];
    saveNews: (news: INews[]) => void;
}