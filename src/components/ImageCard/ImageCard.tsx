import './ImageCard.scss';
import { FC } from 'react';
import classnames from 'classnames';
import { External } from '@components/External/External';
export interface ImageCardProps {
    text: string;
    image: string;
    className?: string;
}

export const ImageCard: FC<ImageCardProps> = ({ text, image, className }) => {
    return (
        <div
            className={classnames(className, 'ImageCard')}
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 46%, rgba(0, 0, 0, 0.68) 93.5%), url(${image})`,
            }}
        >
            <External type="pad" text={text} />
        </div>
    );
};
