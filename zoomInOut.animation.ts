import { animate, state, style, transition, trigger } from '@angular/animations';
import { TRIGGER, ZoomState } from '../constants/animation-constants';

export const zoomInOutAnimation = ([
  trigger(TRIGGER, [
    state(ZoomState.CLOSED, style({
      display: 'none'
    })),
    state(ZoomState.OPENED, style({
      display: 'block'
    })),

    transition(`* => ${ZoomState.OPENED}`, [
      style({
        display: 'block',
        transform: 'scale(.5)',
        opacity: '.3'
      }),
      animate('12s ease-out', style({
        transform: 'scale(1)',
        opacity: '1'
      }))
    ]),

    transition(`${ZoomState.OPENED} => ${ZoomState.CLOSED}`, [
      animate('12s ease-out', style({
        transform: 'scale(.5)',
        opacity: '.3'
      })),
    ]),
  ])
]);
