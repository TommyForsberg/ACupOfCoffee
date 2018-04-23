import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TimeSpan } from 'timespan';
import * as moment from 'moment';
import 'rxjs/Rx';
import { CoffeCup } from '../coffe-cup';

@Component({
  selector: 'app-coffee-cup',
  templateUrl: './coffee-cup.component.html',
  styleUrls: ['./coffee-cup.component.css']
})
export class CoffeeCupComponent implements OnInit {
  @Input() newCup: CoffeCup;

  coffeProgress: Observable<number>;
  progressUnit: number;
 
  brewing: boolean = false;
 timeLeft;

 brewingTime = 0;

  //bgWarning = 75;

  //finishedDate;
  //creationDate;
  constructor() { }

  ngOnInit() {
    this.coffeProgress = Observable.interval(100);
    this.startBrewing();
  }

  startBrewing() {
    
    //this.creationDate = new Date();
  //  var startDate = this.creationDate;
   // this.finishedDate = moment(startDate).add(2, 'm');
    var timeLeft = moment(moment(this.newCup.endDate)).diff(Date.now()) / 1000;
    this.progressUnit = 100 / timeLeft;
    console.log(this.coffeProgress.subscribe(
      (number: number) => {
        this.timeLeft = moment(moment(this.newCup.endDate)).diff(Date.now()) / 1000;
        this.brewingTime += this.progressUnit / 10;
       // console.log(this.timeLeft);
        //console.log(this.brewingTime);
        return 1;
      }
    ));
  }
}
