import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TimeSpan } from 'timespan';
import * as moment from 'moment';
import 'rxjs/Rx';
import { CoffeCup } from '../coffe-cup';
import { IScheduler } from 'rxjs/Scheduler';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-coffee-cup',
  templateUrl: './coffee-cup.component.html',
  styleUrls: ['./coffee-cup.component.css']
})
export class CoffeeCupComponent implements OnInit {
  @Input() newCup: CoffeCup;

  coffeProgress: Observable<number>;
  progressUnit: number;
  duration: number;
  coffeProgress2: Observable<number>;
  updateInterval: number = 100;
  brewing: boolean = false;
 timeLeft;

 brewingTime = 0;

  //bgWarning = 75;

  //finishedDate;
  //creationDate;
  constructor() { }

  ngOnInit() {
    this.duration = moment(this.newCup.endDate).diff(this.newCup.creationDate) / this.updateInterval;
    //duration 30 sec
    console.log("duration"+this.duration);
    
    console.log('timeleft' + this.timeLeft);
    this.progressUnit = 100 / this.duration;
    this.timeLeft = moment(this.newCup.endDate).diff(Date.now()) / this.updateInterval;
    this.brewingTime = (this.duration - this.timeLeft) * this.progressUnit;
    console.log('brewingtime' + this.brewingTime);
    this.coffeProgress = Observable.interval(this.updateInterval).takeWhile(() => this.brewingTime <= 100);

   




    this.startBrewing();

   
  }

  startBrewing() {
   


    

  
    
    console.log('progressUnit' + this.progressUnit);
    console.log(this.duration);
    console.log(this.progressUnit);
      this.coffeProgress.subscribe(
        () => {
       // this.timeLeft = moment(this.newCup.endDate).diff(Date.now()) / 1000;
          this.timeLeft -= 1;
        this.brewingTime += this.progressUnit;
        console.log(this.timeLeft);
        console.log('first' + this.brewingTime);
        },
        () => {
          console.log("Error");

        },
        () => {
          console.log("Completed");
          console.log(new Date());
          console.log(this.newCup.endDate);
        },
    );
  }

}
