/// <reference types="react" />
import * as React from 'react';
import { ComponentClass } from 'react';
import { PassTroughFunction } from '../../utils/getPassThrough';
import { PickerDate, DateChecker } from './types';
import { Day } from './Day';
export interface MonthTitleProps {
    viewDate: Date;
}
export interface WeekdayProps {
    children: string;
    weekDay: number;
}
export interface MonthProps {
    highlighted?: PickerDate;
    isDayBlocked: DateChecker;
    isDayDisabled: DateChecker;
    locale: string | object;
    onDayClick(day: Date, event: React.MouseEvent<any>): void;
    onDayMouseEnter(day: Date, event: React.MouseEvent<any>): void;
    onDayMouseLeave(day: Date, event: React.MouseEvent<any>): void;
    selected?: PickerDate;
    sundayFirstDayOfWeek: boolean;
    viewDate: Date;
}
export declare type MonthNodes = 'Day' | 'DaysWeek' | 'DaysWrapper' | 'Weekday' | 'MonthTitle' | 'MonthWrapper' | 'WeekDay' | 'WeekdaysWrapper';
export interface MonthFactoryArgs {
    /**
     * Used to render each Day of the Month.
     */
    Day: Day;
    /**
     * Used wrap each bunch of days that compose a week.
     */
    DaysWeek: ComponentClass<any>;
    /**
     * Used to render a wrapper around all weeks..
     */
    DaysWrapper: ComponentClass<any>;
    /**
     * Used to render the month title
     */
    MonthTitle: ComponentClass<MonthTitleProps>;
    /**
     * Used as a wrapper of the whole month component.
     */
    MonthWrapper: ComponentClass<any>;
    /**
     * Use it to render each Weekday
     */
    Weekday: ComponentClass<WeekdayProps>;
    /**
     * Used to render a wrapper around all weekdays
     */
    WeekdaysWrapper: ComponentClass<any>;
    /**
     * Use it to customize how props are passed around.
     */
    passthrough: PassTroughFunction<MonthProps, MonthNodes>;
}
export declare type Month = ComponentClass<MonthProps>;
export default function monthFactory({Day, DaysWeek, DaysWrapper, MonthTitle, MonthWrapper, Weekday, WeekdaysWrapper, passthrough}: MonthFactoryArgs): Month;
