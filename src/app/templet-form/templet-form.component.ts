import { Component } from '@angular/core';

@Component({
  selector: 'app-templet-form',
  templateUrl: './templet-form.component.html',
  styleUrls: ['./templet-form.component.scss']
})

export class TempletFormComponent  {

  name="kalyani"     //data binding 
  
Submit(data){
  console.log(JSON.stringify(data))
  alert(JSON.stringify(data))
}

}
