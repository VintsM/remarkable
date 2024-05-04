import './Photo.scss';
import { FC } from 'react';
import {
    SectionHeader,
    SectionHeaderProps,
} from '@components/SectionHeader/SectionHeader';

export interface PhotoProps {
    sectionHeader: SectionHeaderProps;
    image: {
        url: string;
        alt: string;
    };
}

export const Photo: FC<PhotoProps> = ({ sectionHeader, image }) => {
    return (
        <div className="Photo Grid">
            <SectionHeader className="Grid__cell_5" {...sectionHeader} />
            <div className="Grid__cell_6 Grid__cell_start-7">
                <img className="Photo__img" src={image.url} alt={image.alt} />
            </div>
        </div>
    );
};
