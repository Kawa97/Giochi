import { Injectable,Input } from '@angular/core';
import { Game } from './game';
import { Subject } from 'rxjs/Subject';
import { ListService } from './list.service';

@Injectable()
export class PortalistaService {

@Input()
items : Game[] = [];
  private mySubject = new Subject<Game>();
  
    public mySubject$ = this.mySubject.asObservable();

    constructor(private listservice :ListService){
    }
    
    changeSubject(value: Game) { this.mySubject.next(value); }
}
