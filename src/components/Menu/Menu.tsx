import './_menu.scss';

const Menu = ({ visible, setVisible }: { visible: boolean, setVisible: (v: boolean) => void }) => {
    
    const image = new URL('@/assets/images/icon-menu-close.svg', import.meta.url).href;


    const close = () => {
        setVisible(false);
    };

    return (
        <nav className={`nav ${ visible ? 'nav--visible' : ''}`}>
            <div className="nav__container">
                <button aria-label="Hambuger menu" onClick={close} className="nav__close">
                    <img src={image} alt="" />
                </button>
                <ul className="nav__menu">
                    <li><a href="/home" aria-label="Homepage">Home</a></li>
                    <li><a href="/new" aria-label="New posts">New</a></li>
                    <li><a href="/popular" aria-label="Popular posts">Popular</a></li>
                    <li><a href="/treding" aria-label="Trending posts">Trending</a></li>
                    <li><a href="/categories">Categories</a></li>
                </ul>
            </div>
        </nav >
    );
}

export default Menu;