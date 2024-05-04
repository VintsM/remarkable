import './ExternalsSection.scss';
import { FC } from 'react';
import {
    SectionHeader,
    SectionHeaderProps,
} from '@components/SectionHeader/SectionHeader';
import { Section } from '@components/Section/Section';
import { Photo, PhotoProps } from '@components/Photo/Photo';
import { ImageCard, ImageCardProps } from '@components/ImageCard/ImageCard';

interface Props {
    sectionHeader: SectionHeaderProps;
    cards: ImageCardProps[];
    photo: PhotoProps;
}

export const ExternalsSection: FC<Props> = ({
    sectionHeader,
    cards,
    photo,
}) => {
    return (
        <Section className="ExternalsSection">
            <div className="ExternalsSection__content Grid">
                <SectionHeader
                    className="ExternalsSection__header Grid__cell_3"
                    {...sectionHeader}
                />
                {cards.map((card) => (
                    <div key={card.text} className="Grid__cell_3 ExternalsSection__cardWrapper">
                        <ImageCard {...card} />
                    </div>
                ))}
            </div>
            <div className="ExternalsSection__content">
                <Photo {...photo} />
            </div>
        </Section>
    );
};
