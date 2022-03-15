import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.css']
})
export class ListSectionComponent implements OnInit {

  constructor() { }

  @Input() title = '';
  
  items: string[] = [
    'Responsive web design (FreeCodeCamp)',
    'Javascript Algorithms and Structures (FreeCodeCamp)',
    'Front End Development Libraries (FreeCodeCamp)',
    'Backend Development and APIs (FreeCodeCamp)',
    'Curso introductorio de Internet, la Web y la Programación (ConoSurTech)',
    '“Sé programar” (Argentina Programa)',
    'Curso de Introducción al Desarrollo Web: HTML y CSS (1/2) (Google Actívate)'
  ];

  ngOnInit(): void {
  }

}
