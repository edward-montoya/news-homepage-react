export interface INews {
    id: string,
    title: string,
    description: string,
    image: string | null,
    home: boolean,
    top3: boolean
}

export type NewsContextType = {
    news: INews[] | null;
    getHomeNews: () => INews;
    getTopNews: () => INews[];
    saveNews: (news: INews[]) => void;
}