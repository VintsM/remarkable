import './FootSection.scss';
import { FC } from 'react';
import Button from '@components/Button/Button';
import { Container } from '@components/Container/Container';
import { VideoBg } from '@components/VideoBg/VideoBg';
import SmilePoster from '@src/assets/smile_poster.jpg';
import SmileMp4 from '@src/assets/smile.mp4';
import SmileWebm from '@src/assets/smile.webm';

interface Props {}

export const FootSection: FC<Props> = ({}) => {
    const links = ['Instagram', 'YouTube', 'LinkedIn'];

    return (
        <section className="FootSection">
            <VideoBg
                poster={SmilePoster}
                formats={{
                    mp4: SmileMp4,
                    webm: SmileWebm,
                }}
            />
            <Container className="FootSection__container">
                <div className="FootSection__content">
                    <div className="FootSection__text">
                        Let’s create the&nbsp;remarkable
                    </div>
                    <Button text="Get in Touch" />
                </div>
                <div className="FootSection__bottom">
                    {links.map((link) => (
                        <a key={link} href="#" className="FootSection__link">
                            {link}
                        </a>
                    ))}
                    <span className="FootSection__copy">©2024 Remarkable</span>
                </div>
            </Container>
        </section>
    );
};
