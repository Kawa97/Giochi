import { Component, OnInit } from '@angular/core';
import { Game } from '../../game';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  games: Game[]=[
  new Game("hj","jhh"),
  new Game("hdfshj","jhfdshfhh"),
  new Game("hdsfhdfhsfdj","jhsdfhsdfhsfdhsdfhh")
];
  

  constructor() { }

  ngOnInit() {
  }

}
