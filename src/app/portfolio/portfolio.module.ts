import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './portfolio-routing.module';
import { ProfileComponent } from './main/profile/profile.component';
import { BasicComponent } from './main/profile/basic/basic.component';



@NgModule({
  declarations: [
    BasicComponent,
    MainComponent,
    ProfileComponent,
    BasicComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  exports: [
    MainComponent
  ]
})
export class PortfolioModule { }
