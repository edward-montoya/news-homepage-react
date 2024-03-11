import { createContext, useState } from "react";
import { INews, NewsContextType } from "../@types/news";
import { initialContext } from './initialContext';

export const NewsContext = createContext<NewsContextType | null>(null);

const NewsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [news, setNews] = useState<INews[] | null>(initialContext);

    const saveNews = (news: INews[]) => {
        setNews(news);
    }

    const getHomeNews = () => {
        return news?.find((n) => n.home) || {} as INews;
    };

    const getTopNews = () => {
        return news?.filter((n) => n.top3) || [] as INews[];
    };

    const getLatestNews = () => {
        return news?.filter((n) => n.latest) || [] as INews[];
    };

    return <NewsContext.Provider value={{ news, saveNews, getHomeNews, getTopNews, getLatestNews }} >{children}</NewsContext.Provider>
}

export default NewsProvider;