import { Injectable } from '@angular/core';
import { Game } from './game';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PortalistaService {

  private mySubject = new Subject<Game>();
  
    public mySubject$ = this.mySubject.asObservable();
    
    changeSubject(value: Game) { this.mySubject.next(value); }
}
