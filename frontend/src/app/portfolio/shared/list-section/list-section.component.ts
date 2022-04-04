import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.css']
})
export class ListSectionComponent implements OnInit {

  constructor() { }

  @Input() title = '';
  @Input() items : string[] = [];

  ngOnInit(): void {
  }

}
