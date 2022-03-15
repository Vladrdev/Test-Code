import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    DialogComponent
  ],
  exports: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ]
})
export class DialogModule { }
