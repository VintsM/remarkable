import './InsightsSection.scss';
import { FC } from 'react';
import { Section } from '@components/Section/Section';
import { TitleH2, TitleH2Props } from '@components/TitleH2/TitleH2';
import { Card, CardProps } from '@components/Card/Card';
import { Photo, PhotoProps } from '@components/Photo/Photo';

interface Props {
    title: TitleH2Props;
    cards: CardProps[];
    photo: PhotoProps;
}

export const InsightsSection: FC<Props> = ({ title, cards, photo }) => {
    return (
        <Section className="InsightsSection">
            <TitleH2 {...title} className="InsightsSection__title" />
            <div className="InsightsSection__content Grid">
                {cards.map((card) => (
                    <Card key={card.text} {...card} className="Grid__cell_4" />
                ))}
            </div>
            <Photo {...photo} />
        </Section>
    );
};
