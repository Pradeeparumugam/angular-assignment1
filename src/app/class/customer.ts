export class customer{
    name:string;
    address:string;
    constructor(name:string,address:string){
        this.name=name;
        this.address=address;

    }
    getName(){
        return this.name;
    }
    getAddress(){
        return this.address;
    }
}