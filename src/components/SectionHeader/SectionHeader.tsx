import './SectionHeader.scss';
import { FC } from 'react';
import { Point, PointProps } from '@components/Point/Point';
import { TitleH2, TitleH2Props } from '@components/TitleH2/TitleH2';
import {
    ButtonGroup,
    ButtonGroupProps,
} from '@components/ButtonGroup/ButtonGroup';
import classnames from 'classnames';

export interface SectionHeaderProps {
    title: TitleH2Props;
    buttonGroup: ButtonGroupProps;
    point?: PointProps;
    className?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
    point,
    title,
    buttonGroup,
    className,
}) => {
    return (
        <div className={classnames(className, 'SectionHeader')}>
            {point && <Point {...point} className="SectionHeader__point" />}
            <TitleH2 {...title} className="SectionHeader__title" />
            <ButtonGroup {...buttonGroup} />
        </div>
    );
};
