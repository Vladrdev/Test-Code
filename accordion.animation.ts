import { animate, state, style, transition, trigger } from '@angular/animations';
import { AccordionState, TRIGGER } from '../constants/animation-constants';

export const accordionAnimation = ([
  trigger(TRIGGER, [
    state(AccordionState.CLOSED, style({
      display: 'none'
    })),
    state(AccordionState.OPENED, style({
      display: 'block'
    })),

    transition(`* => ${AccordionState.OPENED}`, [
      style({
        display: 'block',
        transform: 'translateY(100%)'
      }),
      animate('0.8s ease-out', style({
        transform: 'translateY(0)',
      }))
    ]),

    transition(`${AccordionState.OPENED} => ${AccordionState.CLOSED}`, [
      animate('0.8s ease-out', style({
        transform: 'translateY(100%)'
      })),
    ]),
  ])
]);
