/// <reference types="react" />
import * as React from 'react';
import { MouseEvent, ReactNode } from 'react';
import { Component as GenericComponent } from '../../types';
import { PassTroughFunction } from '../../utils/getPassThrough';
export declare type RippleOptions = {
    centered: boolean;
    className: string;
    multiple: boolean;
    passthrough: boolean;
    spread: number;
};
export interface RippleWrapperProps {
    className: string;
    innerRef(instance: HTMLElement): void;
}
export interface RippleNodeProps {
    active: boolean;
    idx: string;
    innerRef(instance: HTMLElement): void;
    isTouch: boolean;
    onDeactivate(): void;
    onFinish(idx: string): void;
    spreadSize: number;
    startX: number;
    startY: number;
}
export interface WithRippleFactoryArgs {
    RippleNode: GenericComponent<RippleNodeProps>;
    RippleWrapper: GenericComponent<RippleWrapperProps>;
    passthrough: PassTroughFunction<RippledProps, 'RippleWrapper' | 'RippleNode'>;
}
export interface RippledProps {
    children: ReactNode;
    disabled: boolean;
    onMouseDown(event: MouseEvent<any>): void;
    onMouseUp(event: MouseEvent<any>): void;
    onTouchEnd(event: MouseEvent<any>): void;
    onTouchStart(event: MouseEvent<any>): void;
    ripple: boolean;
    rippleCentered: boolean;
    rippleClassName: string;
    rippleMultiple: boolean;
    rippleSpread: number;
}
export declare type RippleWrapperDescriptor = {
    width: number;
    x: number;
    y: number;
};
export declare type RippleDescriptor = {
    active: boolean;
    isTouch: boolean;
    width: number;
    x: number;
    y: number;
};
export interface RippledState {
    ripples: {
        [key: string]: RippleDescriptor;
    };
}
export interface DecoratedProps {
    onMouseDown(event: MouseEvent<any>): void;
    onMouseUp(event: MouseEvent<any>): void;
    onTouchEnd(event: MouseEvent<any>): void;
    onTouchStart(event: MouseEvent<any>): void;
}
declare const withRippleFactory: ({RippleNode, RippleWrapper, passthrough}: WithRippleFactoryArgs) => (options?: Partial<RippleOptions>) => <P extends DecoratedProps>(ComposedComponent: React.ComponentClass<P>) => React.ComponentClass<RippledProps>;
export default withRippleFactory;
