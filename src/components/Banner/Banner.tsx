import './_banner.scss';

const Banner = () => {

    const mobileImage = new URL('@/assets/images/image-web-3-mobile.jpg', import.meta.url).href;
    const desktopImage = new URL('@/assets/images/image-web-3-desktop.jpg', import.meta.url).href;

    return (
        <article className="banner">
            <picture className="banner__picture">
                <source media="(min-width: 1024px)" srcSet={desktopImage} />
                <img
                    className="banner__image"
                    src={mobileImage}
                    alt="multiple blocks togetter"
                />
            </picture>
            <h1 className="banner__title">The Bright Future of Web 3.0?</h1>
            <p className="banner__description">
                We dive into the next evolution of the web that claims to put the power of the platforms back
                into the hands of the people. But is it really fulfilling its promise?
            </p>
            <div className="banner__button">
                <a
                    href="/post/bright-future-web-3"
                    aria-label="Read more about The Bright Future of Web 3.0? "
                    className="banner__button"
                >read more</a
                >
            </div>
        </article>
    );
}

export default Banner;