import './Card.scss';
import { FC } from 'react';
import classnames from 'classnames';
import { Tag } from '@components/Tag/Tag';
import { ArrowTopRightIcon } from '@components/icons/ArrowTopRightIcon';

export interface CardProps {
    tag: string;
    text: string;
    date: string;
    className?: string;
}

export const Card: FC<CardProps> = ({tag, text, date, className}) => {
    return <div className={classnames("Card", className)}>
        <div className="Card__tag"><Tag text={tag} /></div>
        <div className="Card__text">{text}</div>
        <a href="#" className="Card__bottom">
            <span className="Card__date">{date}</span>
            <ArrowTopRightIcon className="Card__icon" />
        </a>
    </div>;
};
