import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'length'})
export class LengthPipe implements PipeTransform{
    transform(input: string):number{
        let length:number=input.length;
        return length;
    }

}