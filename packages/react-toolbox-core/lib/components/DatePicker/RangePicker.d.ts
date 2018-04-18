/// <reference types="react" />
import { ComponentClass, ReactNode } from 'react';
import { PassTroughFunction } from '../../utils/getPassThrough';
import { FocusedInput, DateRange } from './types';
import { Month } from './Month';
export interface RangePickerProps {
    children: ReactNode;
    focusedInput: FocusedInput;
    highlighted?: DateRange;
    onChange(date: DateRange): void;
    onFocusedInputChange(focus?: FocusedInput): void;
    onHighlightedChange(date: DateRange): void;
    resetToWhenFromChanges: boolean;
    selected?: DateRange;
}
export interface RangePickerArgs {
    MonthsWrapper: ComponentClass<any>;
    Month: Month;
    passthrough: PassTroughFunction<RangePickerProps, 'MonthsWrapper'>;
}
export declare type RangePicker = ComponentClass<RangePickerProps>;
export default function rangePickerFactory({MonthsWrapper, Month, passthrough}: RangePickerArgs): RangePicker;
