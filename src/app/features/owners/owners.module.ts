import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersComponent } from './owners.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OwnersRoutingModule } from './owners-routing.module';

@NgModule({
  declarations: [
    OwnersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OwnersRoutingModule
  ]
})
export class OwnersModule { }
