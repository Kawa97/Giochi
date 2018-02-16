import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeaderService {
private MenuSelectedinterno :Subject<String>=new Subject<String>();
public MenuSelezionatoOsservabile= this.MenuSelectedinterno.asObservable();

public setSelection(id:String){
  this.MenuSelectedinterno.next(id)
}
}
