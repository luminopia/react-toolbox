import { PickerDate, SelectedSource } from './types';
export interface SelectionMatch {
    inRange: boolean;
    selected: boolean;
    source: SelectedSource;
}
export declare function equalSelectionMatch(match1: SelectionMatch, match2: SelectionMatch): boolean;
export default function getSelectionMatch(day: Date, selected: PickerDate, viewDate: Date): SelectionMatch;
