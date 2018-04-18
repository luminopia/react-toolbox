/// <reference types="react" />
import { ComponentClass, MouseEvent, ReactNode } from 'react';
import { PassTroughFunction } from '../../utils/getPassThrough';
import { Component } from '../../types';
export interface ButtonNodeProps {
    flat: boolean;
    innerRef(instance: HTMLElement): void;
    onMouseLeave(event: MouseEvent<any>): void;
    onMouseUp(event: MouseEvent<any>): void;
    primary: boolean;
    type: string | null;
}
export interface ButtonProps {
    accent: boolean;
    children: ReactNode;
    flat: boolean;
    floating: boolean;
    href: string;
    innerRef(instance: HTMLElement): void;
    label: string;
    mini: boolean;
    neutral: boolean;
    onMouseLeave(event: MouseEvent<any>): void;
    onMouseUp(event: MouseEvent<any>): void;
    primary: boolean;
    raised: boolean;
    toggle: boolean;
    type: string;
}
export interface ButtonFactoryArgs {
    ButtonNode: Component<ButtonNodeProps>;
    LinkNode: Component<ButtonNodeProps>;
    passthrough: PassTroughFunction<ButtonProps, 'ButtonNode' | 'LinkNode'>;
}
export default function buttonFactory({ButtonNode, LinkNode, passthrough}: ButtonFactoryArgs): ComponentClass<ButtonProps>;
