import { useContext } from 'react';
import './_container.scss';
import { NewsContext } from '../../context/newsContext';

const TopContainer = () => {

    const context = useContext(NewsContext);
    const topNews = context?.getTopNews();

    return (
        <section className="top">
            <h2 className="sr-only">Top posts</h2>
            <ol className="top__list">
                {
                    topNews?.map(obj => (
                        <li className="top__item">
                            <img className="top__image" src={obj.images?.desktop} alt={obj.images?.alt} />
                            <h3 className="top__title">
                                <a href={obj.url}>{obj.title}</a>
                            </h3>
                            <p className="top__description">{obj.description}</p>
                        </li>
                    ))
                }
            </ol>
        </section>
    );
}

export default TopContainer;