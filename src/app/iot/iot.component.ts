import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IOTComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Gadgeon";
  btnclick(){
    alert("hello from "+this.title)
  }

}
