import { Component, OnInit,TemplateRef } from '@angular/core';

@Component({
  selector: 'app-sidebutton',
  templateUrl: './sidebutton.component.html',
  styleUrls: ['./sidebutton.component.scss']
})
export class SidebuttonComponent implements OnInit {
  isButtonTitleClicked = new Array(3).fill(false);
  
  
  buttonData = [{
    title: 'Prediction',
    description: 'text',
    img: '../../assets/prediction.png'
  },
  {
      title: 'Rebalancing',
      description: 'text',
      img: '../../assets/rebalancing.png'
  },
  {
      title: 'Visualization',
      description: 'text',
      img: '../../assets/visualization.png'
  }
];

  constructor() { }

  ngOnInit(): void {
  }
  public onButtonTitleClicked(i: number): void {
    // whatever you want to happen when button is clicked
    this.isButtonTitleClicked[i] = true;
 }
}
