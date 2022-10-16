import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipes',
  templateUrl: './demopipes.component.html',
  styleUrls: ['./demopipes.component.css']
})
export class DemopipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // title="Banglore";
  //  today="10/13/2022";
  // today=Date();
  user={
    id:100,
    name:"steve",
    DOB:"10-10-2020",
    Salary: "3500"
  
}
}