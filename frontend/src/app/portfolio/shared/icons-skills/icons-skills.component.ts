import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icons-skills',
  templateUrl: './icons-skills.component.html',
  styleUrls: ['./icons-skills.component.css']
})
export class IconsSkillsComponent implements OnInit {

  constructor() { }

  @Input() skills: any;

  ngOnInit(): void {
  }

}
