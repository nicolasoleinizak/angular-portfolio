import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  educationSection = {
    title: 'Education',
    items: [
      'Responsive web design (FreeCodeCamp)',
      'Javascript Algorithms and Structures (FreeCodeCamp)',
      'Front End Development Libraries (FreeCodeCamp)',
      'Backend Development and APIs (FreeCodeCamp)',
      'Curso introductorio de Internet, la Web y la Programación (ConoSurTech)',
      '"Yo programo" (Argentina Programa)',
      '“Sé programar” (Argentina Programa)',
      'Curso de Introducción al Desarrollo Web: HTML y CSS (1/2) (Google Actívate)',
      'Alkemy Acceleration for Fullstack web developer (React)',
    ]
  }

  skillsSection = {
    title: 'Skills',
    items: [
      {
        category: 'Languajes',
        items: [
          {
            name: 'Javascript',
            icon: './assets/img/icons/stack/javascript.svg',
            percent: '95'
          },
          {
            name: 'PHP',
            icon: './assets/img/icons/stack/php.svg',
            percent: '70'
          },
          {
            name: 'HTML',
            icon: './assets/img/icons/stack/html.svg',
            percent: '95'
          },
          {
            name: 'CSS',
            icon: './assets/img/icons/stack/css.svg',
            percent: '90'
          }
        ]
      },
      {
        category: 'Frameworks',
        items: [
          {
            name: 'VueJS',
            icon: './assets/img/icons/stack/vuejs.svg',
            percent: '80'
          },
          {
            name: 'ReactJS',
            icon: './assets/img/icons/stack/react.svg',
            percent: '80'
          },
          {
            name: 'Laravel',
            icon: './assets/img/icons/stack/laravel.svg',
            percent: '60'
          }
        ]
      },
      {
        category: 'Others',
        items: [
          {
            name: 'Node + Express',
            icon: './assets/img/icons/stack/node.png',
            percent: '60'
          },
          {
            name: 'MySQL',
            icon: './assets/img/icons/stack/mysql.svg',
            percent: '70'
          },
          {
            name: 'Git',
            icon: './assets/img/icons/stack/git.svg',
            percent: '75',
          },
          {
            name: 'GitHub',
            icon: './assets/img/icons/stack/github.svg',
            percent: '80'
          }
        ]
      }
    ]
  }

  ngOnInit(): void {
  }

}
