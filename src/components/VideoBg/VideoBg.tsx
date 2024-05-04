import './VideoBg.scss';
import { FC } from 'react';

interface Props {
    poster: string;
    formats: Record<string, string>;
}

export const VideoBg: FC<Props> = ({ poster, formats }) => {
    const sources = Object.entries(formats);

    return (
        <video
            loop
            muted
            autoPlay
            controls={false}
            poster={poster}
            className="VideoBg"
        >
            {sources.map(([format, url]) => {
                return <source key={format} src={url} type={`video/${format}`} />;
            })}
        </video>
    );
};
