/// <reference types="react" />
import { TouchEvent as ReactTouchEvent } from 'react';
import { Coordinates } from './types';
export default function getTouchPosition(event: ReactTouchEvent<any>): Coordinates;
