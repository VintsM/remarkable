import './Point.scss';
import { FC } from 'react';
import classnames from 'classnames';

export interface PointProps {
    text: string;
    type?: string;
    className?: string;
}

export const Point: FC<PointProps> = ({ text, type, className }) => {
    return (
        <div
            className={classnames(className, 'Point', {
                [`Point_${type}`]: type,
            })}
        >
            {text}
        </div>
    );
};
