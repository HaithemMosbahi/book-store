
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
    MdInputModule,
    MdCheckboxModule
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
    MdInputModule,
    MdCheckboxModule
    
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
    MdInputModule,
    MdCheckboxModule
  ]
})
export class MaterialModule {}