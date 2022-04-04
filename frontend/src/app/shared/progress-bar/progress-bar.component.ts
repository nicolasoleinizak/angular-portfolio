import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor() {}

  @Input() progress: number = 0;
  @Input() height: number = 10;
  @Input() color: string = 'rgba(0,0,0,0.8)';

  containerStyle: object = {};
  contentStyle: object = {};
  
  ngOnInit(): void {

    this.containerStyle = {
      'height': this.height+'px',
      'border-radius': this.height/2,
      'border-color': this.color
    };

    this.contentStyle = {
      'width': this.progress+"%",
      'height': this.height+'px',
      'background': this.color

    }
  }

}
