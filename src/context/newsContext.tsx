import { createContext, useState } from "react";
import { INews, NewsContextType } from "../@types/news";

export const NewsContext = createContext<NewsContextType | null>(null);

const NewsProvider: React.FC<{children: React.ReactNode }> = ({ children }) => {
    
    const [news, setNews] = useState<INews[] | null>([
        {
          id: '1',
          title: '',
          description: '',
          home: false,
          top3: true,
          image: ''
        }
      ]);

    const saveNews = (news: INews[]) => {
        setNews(news);
    }

    const getHomeNews = () => {
        return news?.find((n) => n.home) || {} as INews;
    };

    const getTopNews = () => {
        return news?.filter((n) => n.top3) || [] as INews[];
    };

    return <NewsContext.Provider value={{ news, saveNews, getHomeNews, getTopNews }} >{children}</NewsContext.Provider>
}

export default NewsProvider;