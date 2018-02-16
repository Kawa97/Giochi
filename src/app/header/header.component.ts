import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { MenuItem } from '../MenuItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  HeaderItems :MenuItem[] =[
    new MenuItem("Home","Home",true),
    new MenuItem("Lista","Lista"),
    new MenuItem("Modifica","Modifica")
  ];


  constructor(private headerService: HeaderService) { }

  selectSection(id:String){

    this.HeaderItems.forEach(item => {
      if(id == item.id){
        item.selected = true;
      }else{
        item.selected = false;
      }
    });

this.headerService.setSelection(id);

  }

  ngOnInit() {
  }

}
