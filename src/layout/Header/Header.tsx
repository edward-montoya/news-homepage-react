import './_header.scss'

const Header = () => {
    const logo = new URL('@/assets/images/logo.svg', import.meta.url).href
    const menu = new URL('@/assets/images/icon-menu.svg', import.meta.url).href

    const open = () => {};

    return <header>
        <div className="header__container">
            <img className="header__image" src={logo} alt="application logo" />
            <button aria-label="Menu" onClick={open} className="header__menu">
                <img src={menu} alt="" />
            </button>
        </div>
    </header>
}

export default Header;