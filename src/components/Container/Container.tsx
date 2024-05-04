import './Container.scss';
import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren> = ({ children }) => {
    return <div className="Container">{children}</div>;
};
