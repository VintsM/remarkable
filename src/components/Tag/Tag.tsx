import './Tag.scss';
import { FC } from 'react';

interface TagProps {
    text: string
}

export const Tag: FC<TagProps> = ({text}) => {
    return <span className="Tag">{text}</span>;
};
