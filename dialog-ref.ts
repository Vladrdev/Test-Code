import { OverlayRef } from '@angular/cdk/overlay';
import { Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DIALOG_DATA } from '@dialog/services/dialog-tokens.injector';
import { DialogConfig } from '@dialog/services/dialog.service';

export enum DialogState {
  OPENED = 'opened',
  CLOSED = 'closed',
}

export class DialogRef {
  private dialogState$: BehaviorSubject<DialogState> = new BehaviorSubject<DialogState>(DialogState.OPENED);
  private animationState$: BehaviorSubject<DialogState> = new BehaviorSubject<DialogState>(DialogState.OPENED);

  public set dialogState(value: DialogState) {
    this.dialogState$.next(value);
  }

  public get animationState(): DialogState {
    return this.animationState$.getValue();
  }

  public set animationState(value: DialogState) {
    this.animationState$.next(value);
  }

  constructor(
    private overlayRef: OverlayRef,
    @Inject(DIALOG_DATA) dialogConfig?: DialogConfig
  ) {
    this.dialogState$.subscribe((state) => {
      if (state === DialogState.CLOSED) {
        this.overlayRef.dispose();
      }
    })

    if (dialogConfig?.backdropClick) {
      this.overlayRef.backdropClick().subscribe(() => this.close());
    }
  }

  public close(): void {
    this.animationState = DialogState.CLOSED;
  }
}
