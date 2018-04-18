/// <reference types="react" />
import { Component } from 'react';
export interface PassTroughFunction<P, N> {
    (prop: P, nodeName: N, instance: Component<P, any>): object;
}
export default function getPassThroughProps<P, N>(option?: string[] | PassTroughFunction<P, N>): PassTroughFunction<P, N>;
