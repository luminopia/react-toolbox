/// <reference types="react" />
import * as React from 'react';
import { ComponentClass } from 'react';
import { PassTroughFunction } from '../../utils/getPassThrough';
import { DateChecker, DateRange, FocusedInput, PickerDate, PickerMode } from './types';
import { RangePicker } from './RangePicker';
import { Month } from './Month';
export interface DatePickerProps {
    focusedInput: FocusedInput;
    highlighted?: PickerDate;
    isDayBlocked: DateChecker;
    isDayDisabled: DateChecker;
    locale: string | object;
    mode: PickerMode;
    numberOfMonths: number;
    onChange(date: DateRange): void;
    onDayClick(day: Date, event: React.MouseEvent<any>): void;
    onDayMouseEnter(day: Date, event: React.MouseEvent<any>): void;
    onDayMouseLeave(day: Date, event: React.MouseEvent<any>): void;
    onFocusedInputChange(focus?: FocusedInput): void;
    onHighlightedChange(date: DateRange): void;
    resetToWhenFromChanges: boolean;
    selected: PickerDate;
    sundayFirstDayOfWeek: boolean;
    viewDate: Date;
}
export interface DatePickerState {
    viewDate: Date;
}
export interface ArrowNodeProps {
    children: string;
    onClick(event: React.MouseEvent<any>): void;
}
export declare type DatePickerNodes = 'NextNode' | 'Month' | 'PickerWrapper' | 'PrevNode' | 'SinglePicker' | 'RangePicker';
export interface DatePickerArgs {
    Month: Month;
    NextNode: ComponentClass<ArrowNodeProps>;
    PickerWrapper: ComponentClass<any>;
    PrevNode: ComponentClass<ArrowNodeProps>;
    RangePicker: RangePicker;
    SinglePicker: ComponentClass<any>;
    passthrough: PassTroughFunction<DatePickerProps, DatePickerNodes>;
}
export default function datePickerFactory({Month, NextNode, PickerWrapper, PrevNode, RangePicker, SinglePicker, passthrough}: DatePickerArgs): ComponentClass<DatePickerProps>;
