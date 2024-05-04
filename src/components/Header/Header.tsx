import './Header.scss';
import { FC, useState } from 'react';
import Logo from '@src/assets/logo_full.svg';
import classnames from 'classnames';

interface Props {}

export const Header: FC<Props> = ({}) => {
    const links = ['Some', 'Navigation', 'Links'];

    const [buttonActive, setButtonActive] = useState(false);

    return (
        <header className="Header">
            <div className="Header__logo">
                <img
                    src={Logo}
                    width={128}
                    height={11}
                    alt="Remarkable Studio"
                />
            </div>
            <div className="Header__right">
                <button
                    className={classnames('Header__navButton', {
                        Header__navButton_active: buttonActive,
                    })}
                    onClick={() => {
                        setButtonActive(!buttonActive);
                    }}
                />
                <nav className="Header__nav">
                    {links.map((link) => (
                        <a key={link} className="Header__navLink" href="#">
                            {link}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};
