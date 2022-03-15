export const TRIGGER = 'animation';

export enum AnimationType {
  ACCORDION = 'accordionAnimation',
  ZOOM = 'zoomInOutAnimation',
  NONE = 'noneAnimation'
}

export enum AnimationState {
  OPENED = 'opened',
  CLOSED = 'closed'
}

export const ZoomState = {
  OPENED: `${AnimationType.ZOOM}-${AnimationState.OPENED}`,
  CLOSED: `${AnimationType.ZOOM}-${AnimationState.CLOSED}`,
}

export const AccordionState = {
  OPENED: `${AnimationType.ACCORDION}-${AnimationState.OPENED}`,
  CLOSED: `${AnimationType.ACCORDION}-${AnimationState.CLOSED}`,
}

