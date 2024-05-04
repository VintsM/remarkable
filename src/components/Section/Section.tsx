import './Section.scss';
import { FC, PropsWithChildren } from 'react';
import { Container } from '@components/Container/Container';

interface Props {
    className?: string;
}

export const Section: FC<PropsWithChildren<Props>> = ({className, children}) => {
    return <section className={className}>
        <Container>
            {children}
        </Container>
    </section>;
};
