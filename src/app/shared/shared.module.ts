import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { SectionComponent } from './section/section.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SectionTitleComponent,
    SectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SectionTitleComponent
  ]
})
export class SharedModule { }
