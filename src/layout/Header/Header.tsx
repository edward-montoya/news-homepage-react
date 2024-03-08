import { useState } from 'react';
import './_header.scss'
import Menu from '../../components/Menu/Menu';

const Header = () => {
    const logo = new URL('@/assets/images/logo.svg', import.meta.url).href;
    const menu = new URL('@/assets/images/icon-menu.svg', import.meta.url).href;

    const [visible, setVisible] = useState(false);

    const open = () => {
        setVisible(true);
    };

    return (
        <header>
            <Menu visible={visible} setVisible={setVisible} />
            <div className="header__container">
                <img className="header__image" src={logo} alt="application logo" />
                <button aria-label="Menu" onClick={open} className="header__menu">
                    <img src={menu} alt="" />
                </button>
            </div>
        </header>
    );
}

export default Header;