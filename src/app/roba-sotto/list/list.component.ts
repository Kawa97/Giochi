import { Component, OnInit } from '@angular/core';
import { Game } from '../../game';
import { PortalistaService } from '../../portalista.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  games: Game[]=[];
  
  constructor(private portaliste :PortalistaService){}
selectItem(item: Game) {
  this.portaliste.changeSubject(item);
}
}
