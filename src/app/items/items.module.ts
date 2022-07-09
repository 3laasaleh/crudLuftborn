import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { GlobService } from 'src/_core/publicService.Service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NGPrimeModule } from 'src/_core/NGPrime.Module';


@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    NGPrimeModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
    
  ],
  providers:[GlobService]
})
export class ItemsModule { }
