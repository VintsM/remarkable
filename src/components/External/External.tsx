import './External.scss';
import { FC } from 'react';
import classnames from 'classnames';
import { ArrowTopRightIcon } from '@components/icons/ArrowTopRightIcon';

export interface ExternalProps {
    text: string;
    type?: 'pad';
    className?: string;
}

export const External: FC<ExternalProps> = ({ text, type, className }) => {
    return (
        <a
            href="#"
            className={classnames(className, 'External', {
                [`External_${type}`]: type,
            })}
        >
            <span className="External__text">{text}</span>
            <ArrowTopRightIcon className="External__icon" />
        </a>
    );
};
