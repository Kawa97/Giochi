import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSection: String="Home";

  
constructor(private headerService: HeaderService){

  this.headerService.MenuSelezionatoOsservabile.subscribe((id:String)=>{this.currentSection=id;});

}

}
