import{ Pipe,PipeTransform} from '@angular/core';
import { from } from 'rxjs';

@Pipe({name: 'reverseofstring'})
export class ReversePipe implements PipeTransform{
    transform(str:string) { 
        //for(let i< input.lengthi--){
           // let s:string+=CharacterData(i);
           return str.split('').reverse().join('');
        
    }
}
