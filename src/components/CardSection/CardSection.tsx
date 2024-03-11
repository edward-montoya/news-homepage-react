import { useContext } from 'react';
import './_card.scss';
import { NewsContext } from '../../context/newsContext';

const CardSection = () => {

    const context = useContext(NewsContext);
    const latestNews = context?.getLatestNews();

    return (
        <section className="news">
            <h2 className="news__title news__title--main">New</h2>
            <ul className="news__container">
                {
                    latestNews?.map(obj => (
                        <li className="news__item">
                            <h3 className="news__title">
                                <a href={obj.url}>{obj.title}</a>
                            </h3>
                            <p className="news__description">{obj.description}</p>
                        </li>
                    ))
                }

            </ul>
        </section>
    );
}

export default CardSection;