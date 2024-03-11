import { useContext } from 'react';
import './_banner.scss';
import { NewsContext } from '../../context/newsContext';

const Banner = () => {

    const context = useContext(NewsContext);
    const homeNew = context?.getHomeNews();

    return (
        <article className="banner">
            <picture className="banner__picture">
                <source media="(min-width: 1024px)" srcSet={homeNew?.images?.desktop} />
                <img
                    className="banner__image"
                    src={homeNew?.images?.mobile}
                    alt="multiple blocks togetter"
                />
            </picture>
            <h1 className="banner__title">{homeNew?.title}</h1>
            <p className="banner__description">
                {homeNew?.description}
            </p>
            <div className="banner__button">
                <a
                    href={homeNew?.url}
                    aria-label={homeNew?.ariaLabel}
                    className="banner__button"
                >read more</a
                >
            </div>
        </article>
    );
}

export default Banner;