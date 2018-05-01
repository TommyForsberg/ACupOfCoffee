import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CoffeeCup } from '../coffe-cup';
import { CoffeeCupService } from '../coffee-cup.service';
import * as moment from 'moment';
import 'rxjs/Rx';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-coffee-brewer',
  providers: [CoffeeCupService],
  templateUrl: './coffee-brewer.component.html',
  styleUrls: ['./coffee-brewer.component.css']
})
export class CoffeeBrewerComponent implements OnInit, OnDestroy {
  public coffeCups: Observable<CoffeeCup[]>;
  source: Observable<number>;
  subscriptions = [];
  constructor(private dataService: CoffeeCupService) { }


  ngOnInit() {
    this.coffeCups = this.dataService.coffeeList;

    this.source = Observable
      .interval(5000);
      
    const subscription = this.source.subscribe(
      () => {
        this.dataService.getAll();
        console.log("fetched data");
      },
      () => {
        console.log("Error");

      },
      () => {
        console.log("Completed");
      },
    );
    this.subscriptions.push(subscription);
    console.log(this.coffeCups);
    
  }

  addCupToQue() {
    var coffee = new CoffeeCup();
    var date = new Date();
    var endDate = moment(date).add(3, 'minutes').toDate();
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
    var utcEndDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes(), endDate.getSeconds()));
    coffee.creationTime = utcDate;
    console.log('creation' + coffee.creationTime);
    coffee.endTime = utcEndDate;
    coffee.duration = 3; 
    console.log(coffee.creationTime + " " + coffee.endTime);
    this.dataService.addCoffee(coffee);
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
