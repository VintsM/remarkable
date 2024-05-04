import './SmallImageCard.scss';
import { FC } from 'react';
import classnames from 'classnames';
import { External } from '@components/External/External';

interface Props {
    text: string;
    image: string;
    className?: string;
}

export const SmallImageCard: FC<Props> = ({ text, image, className }) => {
    return (
        <div className={classnames(className, 'SmallImageCard')}>
            <div className="SmallImageCard__imgWrapper">
                <img src={image} alt={text} className="SmallImageCard__img" />
            </div>
            <External text={text} />
        </div>
    );
};
