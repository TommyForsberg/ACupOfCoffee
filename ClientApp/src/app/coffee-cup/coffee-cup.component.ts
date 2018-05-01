import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { TimeSpan } from 'timespan';
import * as moment from 'moment';
import 'rxjs/Rx';
import { CoffeeCup } from '../coffe-cup';
import { IScheduler } from 'rxjs/Scheduler';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-coffee-cup',
  templateUrl: './coffee-cup.component.html',
  styleUrls: ['./coffee-cup.component.css']
})
export class CoffeeCupComponent implements OnInit {
  @Input() newCup: CoffeeCup;

  coffeProgress: Observable<number>;
  progressUnit: number;
  duration: number;
  updateInterval: number = 100;
  brewing: boolean = false;
  timeLeft: number;

  brewingTime = 0;

  constructor() { }


  ngOnInit() {
    console.log(this.newCup);
    this.duration = moment(this.newCup.endTime).diff(this.newCup.creationTime) / this.updateInterval;
    console.log("duration"+this.duration);
    console.log("enddate" + this.newCup.endTime);
   
    this.progressUnit = 100 / this.duration;

    if (moment(this.newCup.endTime).isBefore(Date.now())) {
      console.log("före");
      this.timeLeft = 0;
      this.brewingTime = 100;
    }
    else {
      this.timeLeft = moment(this.newCup.endTime).diff(Date.now()) / this.updateInterval;
      this.brewingTime = (this.duration - this.timeLeft) * this.progressUnit;
      this.coffeProgress = Observable.interval(this.updateInterval).takeWhile(() => this.brewingTime <= 100 && this.brewingTime > 0);
      this.startBrewing();

    }
   
    console.log('brewingtime' + this.brewingTime);
    

   
  
 


    
   
  }

  startBrewing() {
   


    

  
    
    console.log('progressUnit' + this.progressUnit);
    console.log('duration ' + this.duration);
    console.log('progressUnit '+this.progressUnit);
      this.coffeProgress.subscribe(
        () => {
       // this.timeLeft = moment(this.newCup.endDate).diff(Date.now()) / 1000;
        this.timeLeft -= 1;
        this.brewingTime += this.progressUnit;
        console.log(this.timeLeft);
        },
        () => {
          console.log("Error");

        },
        () => {
          console.log("Completed");
        },
    );
  }

}
