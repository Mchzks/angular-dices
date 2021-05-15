import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DicesApp';

  leftDice = '../assets/images/dice1.png';
  rightDice = '../assets/images/dice1.png';

  leftValue: number = 0;
  rightValue: number = 1;

  roll(): void {
    this.leftValue = Math.round(Math.random() * 5) + 1;
    this.rightValue = Math.round(Math.random() * 5) + 1;

    this.leftDice = '../assets/images/dice' + this.leftValue + '.png';
    this.rightDice = '../assets/images/dice' + this.rightValue + '.png';
  }
}
