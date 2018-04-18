/// <reference types="react" />
import { ComponentClass, MouseEvent } from 'react';
import { PassTroughFunction } from '../../utils/getPassThrough';
import { DateChecker, PickerDate, SelectedSource } from './types';
import { Component } from '../../types';
export interface DayNodeProps {
    blocked: boolean;
    disabled: boolean;
    highlighted: boolean;
    inRange: boolean;
    onClick(event: MouseEvent<any>): void;
    onMouseEnter(event: MouseEvent<any>): void;
    onMouseLeave(event: MouseEvent<any>): void;
    outOfMonth: boolean;
    selected: boolean;
    selectedSource: SelectedSource;
    today: boolean;
}
export interface DayFactoryArgs {
    DayNode: Component<DayNodeProps>;
    passthrough: PassTroughFunction<DayProps, 'DayNode'>;
}
export interface DayProps {
    day: Date;
    highlighted?: PickerDate;
    isDayBlocked: DateChecker;
    isDayDisabled: DateChecker;
    onClick(day: Date, event: MouseEvent<any>): void;
    onMouseEnter(day: Date, event: MouseEvent<any>): void;
    onMouseLeave(day: Date, event: MouseEvent<any>): void;
    selected?: PickerDate;
    viewDate: Date;
}
export declare type Day = ComponentClass<DayProps>;
export default function dayFactory({DayNode, passthrough}: DayFactoryArgs): Day;
