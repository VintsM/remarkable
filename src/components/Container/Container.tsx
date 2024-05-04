import './Container.scss';
import classnames from 'classnames';
import { FC, PropsWithChildren } from 'react';

interface Props {
    className?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({
    className,
    children,
}) => {
    return <div className={classnames('Container', className)}>{children}</div>;
};
