import '@src/styles/index.scss';
import { FC } from 'react';
import { Hero } from '@components/Hero/Hero';
import { ExternalsSection } from '@components/ExternalsSection/ExternalsSection';
import Man from '@src/assets/man.jpg';
import Girl from '@src/assets/girl.jpg';
import Monastery from '@src/assets/monastery.jpg';
import GoodPeople from '@src/assets/good_people.jpg';
import GoodPeople2 from '@src/assets/good_people_2.jpg';
import { InsightsSection } from '@components/InsightsSection/InsightsSection';

interface Props {}

export const Index: FC<Props> = ({}) => {
    return (
        <>
            <Hero />
            <ExternalsSection
                sectionHeader={{
                    point: { type: 'secondary', text: 'Portfolio Spotlight' },
                    title: { type: 'secondary', text: ['Recent projects'] },
                    buttonGroup: {
                        buttons: [{ text: 'View All', type: 'secondary' }],
                    },
                }}
                cards={[
                    {
                        text: 'Elder Tech',
                        image: Man,
                    },
                    {
                        text: 'Mystic Haven',
                        image: Monastery,
                    },
                    {
                        text: 'Sugar Stone',
                        image: Girl,
                    },
                ]}
                photo={{
                    sectionHeader: {
                        point: { type: 'secondary', text: 'Our Philosophy' },
                        title: {
                            type: 'secondary',
                            text: [
                                'Human-centric',
                                'strategies',
                                'to\u00A0cut',
                            ],
                            italic: 'through\u00A0the\u00A0noise',
                        },
                        buttonGroup: {
                            buttons: [{ type: 'secondary', text: 'Our Story' }],
                        },
                    },
                    image: {
                        url: GoodPeople,
                        alt: 'good people',
                    },
                }}
            />
            <InsightsSection
                title={{ text: ['Insights from'], italic: 'our blog' }}
                cards={[
                    {
                        tag: 'Branding',
                        text: 'Designing memorable brands for lasting impressions',
                        date: '04/07/23',
                    },
                    {
                        tag: 'Web Design',
                        text: 'Crafting responsive designs for user engagement',
                        date: '26/08/23',
                    },
                    {
                        tag: 'Development',
                        text: 'Navigating website development & coding intuitively',
                        date: '20/09/23',
                    },
                ]}
                photo={{
                    sectionHeader: {
                        point: { text: 'Work for Remarkable' },
                        title: {
                            text: ['Craft your future with our', 'impactful'],
                            italic: 'creative team',
                        },
                        buttonGroup: {
                            buttons: [
                                { type: 'secondary', text: 'View Openings' },
                                { type: 'tertiary', text: 'About The Team' },
                            ],
                        },
                    },
                    image: {
                        url: GoodPeople2,
                        alt: 'another good people',
                    },
                }}
            />
        </>
    );
};
