import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable()
export class ListService {

  getGameList(): Game[]{
    let items:Game[]=[];
    items.push(new Game());
    items.push(new Game("cvnc"));
    items.push(new Game("avbnbv", "2345"));
    items.push(new Game("HRG"));
    return items;
    }
}
