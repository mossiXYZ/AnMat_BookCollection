import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatCheckboxModule,
    Material.MatCardModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatDatepickerModule,
    //MdNativeDateModule
    Material.MatToolbarModule,
    Material.MatProgressSpinnerModule,
    Material.MatTabsModule,
    Material.MatListModule
  ],
  exports: [
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatCheckboxModule,
    Material.MatCardModule,
    Material.MatGridListModule,
    Material.MatInputModule,
    Material.MatDatepickerModule,
    //MdNativeDateModule
    Material.MatToolbarModule,
    Material.MatProgressSpinnerModule,
    Material.MatTabsModule,
    Material.MatListModule

  ]
})
export class MaterialModule { }
