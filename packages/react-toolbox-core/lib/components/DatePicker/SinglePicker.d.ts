/// <reference types="react" />
import { ComponentClass, ReactNode } from 'react';
import { PassTroughFunction } from '../../utils/getPassThrough';
export interface SinglePickerProps {
    children: ReactNode;
    onChange(date: Date): void;
    selected: Date;
}
export interface SinglePickerArgs {
    MonthsWrapper: any;
    Month: any;
    passthrough: PassTroughFunction<SinglePickerProps, 'MonthsWrapper' | 'Month'>;
}
export default function singlePickerFactory({MonthsWrapper, Month, passthrough}: SinglePickerArgs): ComponentClass<SinglePickerProps>;
