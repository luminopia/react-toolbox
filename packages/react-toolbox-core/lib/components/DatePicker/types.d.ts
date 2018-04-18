export interface DateRange {
    from?: Date;
    to?: Date;
}
export declare type PickerDate = DateRange | Date | undefined;
export declare type DateChecker = (date: Date) => boolean;
export declare type FocusedInput = 'START_DATE' | 'END_DATE';
export declare type PickerMode = 'SINGLE' | 'RANGE';
export declare type SelectedSource = 'from' | 'to' | null;
