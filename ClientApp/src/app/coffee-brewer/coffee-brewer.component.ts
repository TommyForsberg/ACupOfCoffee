import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CoffeCup } from '../coffe-cup';
import * as moment from 'moment';


@Component({
  selector: 'app-coffee-brewer',
  templateUrl: './coffee-brewer.component.html',
  styleUrls: ['./coffee-brewer.component.css']
})
export class CoffeeBrewerComponent implements OnInit {
  coffeCups: CoffeCup[];
  constructor() { }


  ngOnInit() {
    this.coffeCups = new Array<CoffeCup>();
  }

  addCupToQue() {
    var coffee = new CoffeCup();
    coffee.creationDate = new Date();
    coffee.endDate = moment(coffee.creationDate).add(2, 'm').toDate();
    this.coffeCups.push(coffee);
  }
  

}
