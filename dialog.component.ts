import { Component, Inject, Input } from '@angular/core';

import { accordionAnimation } from '../../animations/accordion.animation';
import { zoomInOutAnimation } from '../../animations/zoomInOut.animation';
import { AnimationType } from '../../constants/animation-constants';
import { DialogRef, DialogState } from '../../services/dialog-ref';
import { DIALOG_DATA } from '@dialog/services/dialog-tokens.injector';
import { DialogConfig } from '@dialog/services/dialog.service';

export interface DialogStyleConfig {
  backgroundColor?: string;
  height: string;
  width: string;
  position?: {
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
  }
}

export const DEFAULT_DIALOG_STYLES: DialogStyleConfig = {
  backgroundColor: '#0D5CA3',
  height: '100%',
  width: '100%',
  position: {
    top: '0',
    left: '0',
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    accordionAnimation,
    zoomInOutAnimation
  ]
})
export class DialogComponent {
  @Input() header: string = '';
  @Input() animationType: AnimationType = AnimationType.NONE;
  @Input() dialogStyles: DialogStyleConfig = DEFAULT_DIALOG_STYLES;

  public dialogState = DialogState;

  public get animationState(): DialogState {
    return this.dialogRef.animationState;
  }

  public set animationState(value: DialogState) {
    this.dialogRef.animationState = value;
  }

  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public dialogConfig?: DialogConfig
  ) {
    this.dialogRef.dialogState = this.dialogState.OPENED;
  }

  public animationDone(): void {
    if (this.animationState === this.dialogState.CLOSED) {
      this.dialogRef.dialogState = this.dialogState.CLOSED;
    }
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public getOverlayStyles(): {} {
    return {
      'background': this.dialogStyles.backgroundColor || DEFAULT_DIALOG_STYLES.backgroundColor,
      'width': this.dialogStyles.width,
      'height': this.dialogStyles.height,
      'top': this.dialogStyles.position?.top || 'auto',
      'bottom': this.dialogStyles.position?.bottom || 'auto',
      'left': this.dialogStyles.position?.left || 'auto',
      'right': this.dialogStyles.position?.right || 'auto',
    }
  }
}
