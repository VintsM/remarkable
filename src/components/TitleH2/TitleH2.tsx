import './TitleH2.scss';
import { FC, Fragment, PropsWithChildren } from 'react';
import classnames from 'classnames';

export interface TitleH2Props {
    text: string[];
    italic?: string;
    type?: 'secondary';
    className?: string;
}

export const TitleH2: FC<TitleH2Props> = ({ text, italic, type, className }) => {
    return (
        <h2 className={classnames(className, 'TitleH2', {
            [`TitleH2_${type}`]: type
        })}>
            {text.map((t, i) => {
                return i === 1 ? (
                    <Fragment key={t}>
                        <span className="TitleH2__colored">{t}</span>{' '}
                    </Fragment>
                ) : (
                    <Fragment key={t}>{t} </Fragment>
                );
            })}
            {italic && <span className="TitleH2__italic">{italic}</span>}
        </h2>
    );
};
