export class Game {
    
        id: string;
        name: string;
        genre: string;
        rating :string;
        constructor(name:string="bho",id:string="12432",genre="not set",rating:string="not set"){
            this.name=name;
            this.id=id;
            this.genre=genre;
            this.rating=rating;
        }
    }
    