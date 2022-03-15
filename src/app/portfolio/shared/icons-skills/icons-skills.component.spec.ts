import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSkillsComponent } from './icons-skills.component';

describe('IconsSkillsComponent', () => {
  let component: IconsSkillsComponent;
  let fixture: ComponentFixture<IconsSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
