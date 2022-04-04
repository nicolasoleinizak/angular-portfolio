import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './portfolio-routing.module';
import { ProfileComponent } from './main/profile/profile.component';
import { BasicComponent } from './main/profile/basic/basic.component';
import { SectionComponent } from './shared/section/section.component';
import { SectionTitleComponent } from './shared/section-title/section-title.component';
import { ListSectionComponent } from './shared/list-section/list-section.component';
import { IconsSkillsComponent } from './shared/icons-skills/icons-skills.component';

@NgModule({
  declarations: [
    BasicComponent,
    MainComponent,
    ProfileComponent,
    BasicComponent,
    SectionComponent,
    SectionTitleComponent,
    ListSectionComponent,
    IconsSkillsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ],
  exports: [
    MainComponent
  ]
})
export class PortfolioModule { }
