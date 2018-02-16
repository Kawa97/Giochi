import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../game';
import { PortalistaService } from '../../portalista.service';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
@Input()
  items: Game[]=[];
  
  constructor(private portaliste :ListService){
    
    this.items=portaliste.getGameList();
  }
  /*
selectItem(item: Game) {
  this.portaliste.changeSubject(item);
}*/
}
