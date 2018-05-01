import { Injectable } from "@angular/core";
import { Inject } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/do'; // debug
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CoffeeCup } from './coffe-cup';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// To inject the dependancies in the service
@Injectable()
export class CoffeeCupService {
  public coffeeList: Observable<CoffeeCup[]>;
  private _coffeeList: BehaviorSubject<CoffeeCup[]>;
  //private baseUrl: string;
  private dataStore: {
    coffeeList: CoffeeCup[];
  };

  //// Constructor to set the values
  constructor(private http2: Http, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    // Base URL for the API
    //this.baseUrl = '/api/';
    this.dataStore = { coffeeList: [] };
    this._coffeeList = <BehaviorSubject<CoffeeCup[]>>new BehaviorSubject([]);
    this.coffeeList = this._coffeeList.asObservable();
  }

  public addCoffee(coffeeCup: CoffeeCup) {
    console.log("add Employee");
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    console.log('add Employee : ' + JSON.stringify(coffeeCup));

    this.http2.post(`${this.baseUrl}api/CoffeeData/`, JSON.stringify(coffeeCup), { headers: headers })
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.coffeeList.push(data);
        this._coffeeList.next(Object.assign({}, this.dataStore).coffeeList);
      }, error => console.log('Could not create todo.'));
  };

  getAll() {
    this.http2.get(`${this.baseUrl}api/CoffeeData`)
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.coffeeList = data;
        // Adding newly added Employee in the list
        this._coffeeList.next(Object.assign({}, this.dataStore).coffeeList);
      }, error => console.log('Could not load coffee.'));
  }
}
