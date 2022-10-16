import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innovatve',
  templateUrl: './innovatve.component.html',
  styleUrls: ['./innovatve.component.css']
})
export class INNOVATVEComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Gadgeon";
  btnclick(){
    alert("hello from "+this.title)
  }

}
