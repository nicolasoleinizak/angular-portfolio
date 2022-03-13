import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }
  shortDescription: string = `
    <p>Hi!</p>
    <p>You can call me Nico.</p>
    <p>I'm a fullstack web developer mainly focused on Javascript and PHP, but learning and trying new languajes, frameworks, and work areas every day.</p>
    <p>If i had to choose some part of this, it will be the backend, because it feels always challenging. Actually, i’m studying AI and Data Science and planning to take advantage of that to create more complex and smart applications.</p>
    <p>Welcome to my portfolio, i expect you to like it.</p>
  `;
  ngOnInit(): void {
  }

}
