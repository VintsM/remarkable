import './ButtonGroup.scss';
import { FC } from 'react';
import Button, { ButtonProps } from '@components/Button/Button';

export interface ButtonGroupProps {
    buttons: ButtonProps[];
}

export const ButtonGroup: FC<ButtonGroupProps> = ({buttons}) => {
    return (
        <div className="ButtonGroup">
            {buttons.map((button) => (
                <Button key={button.text} {...button} className="ButtonGroup__button" />
            ))}
        </div>
    );
};
