import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'square'
})

export class SquarePipe implements PipeTransform{
    transform(v:number, v1:number){
        if(v1){
            return (v*v*v)+v1
        }
        else{
            return (v*v*v)
        }
    }
}
