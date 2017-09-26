
import { NgModule } from '@angular/core';

import {
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdTabsModule,
    MdProgressSpinnerModule,
    MdGridListModule,
    MdListModule,
    MdInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdTabsModule,
    MdProgressSpinnerModule,
    MdGridListModule,
    MdListModule,
    MdInputModule
    
  ],
  exports: [
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdTabsModule,
    MdProgressSpinnerModule,
    MdGridListModule,
    MdListModule,
    MdInputModule
  ]
})
export class MaterialModule {}