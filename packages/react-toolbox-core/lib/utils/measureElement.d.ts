import { NativeComponent } from 'react-native';
export declare type PositionDescriptor = {
    left: number;
    top: number;
    width: number;
    height: number;
};
export default function measureElement(element: HTMLElement | NativeComponent): Promise<PositionDescriptor>;
