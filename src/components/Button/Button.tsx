import './Button.scss';
import { FC, MouseEventHandler } from 'react';
import classnames from 'classnames';

export type ButtonProps = {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    type?: 'secondary' | 'tertiary';
};

const Button: FC<ButtonProps> = ({ text, onClick, className, type }) => {
    return (
        <button
            className={classnames('Button', className, {
                [`Button_${type}`]: type,
            })}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
