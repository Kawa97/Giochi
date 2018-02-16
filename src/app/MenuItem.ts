export class MenuItem{
    value: String;
    id: String;
    selected: boolean;

    constructor(value:String,id:String,selected:boolean=false){

            this.value=value;
            this.id=id;
            this.selected=selected;

    }

}