import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  //  standalone: true,
})
export class Home {

  hundleEvent(event :MouseEvent){
    console.log('Function Called!!');
    console.log('Event Type :', event.type);
    console.log('DOM Get :', event.target);
    console.log('Class List :', (event.target as Element).classList);
    console.log('Class Name :', (event.target as Element).className);
    }

    mouseenterEvent(event:MouseEvent){
       console.log('mouseenterEvent Function Called!!');
       console.log('Event Type :', event.type);
       console.log('Event DOM :', event.target);
       console.log('Event class :', (event.target as Element).className);
       console.log('Event Id :', (event.target as Element).id);
    }

   mouseleveEvent(event:MouseEvent){
       console.log('mouseleveEvent Function Called!!');
       console.log('Event Type :', event.type);
       console.log('Event DOM :', event.target);
       console.log('Event class :', (event.target as Element).className);
       console.log('Event Id :', (event.target as Element).id);
    }

    inputfunction(event: Event){
      // console.log('input filed Function Called!!',event);
        console.log('Event Type :', event.type);
      // console.log('Event DOM :', event.target);
       console.log('Event value :', (event.target as HTMLInputElement).value);
       //console.log('Event Id :', (event.target as Element).id);
    }

    focusfunction(event: Event){
      console.log('Event Type :', event.type);
      console.log('Event vlaue :', (event.target as HTMLInputElement).value);
      console.log('Event vlaue :', (event.target as HTMLInputElement).name);
      console.log('Event Class :', (event.target as HTMLInputElement).className);
    }

    blurfunction(event: Event){
      console.log('Event Type :', event.type);
      console.log('Event vlaue :', (event.target as HTMLInputElement).value);
      console.log('Event vlaue :', (event.target as HTMLInputElement).name);
      console.log('Event Class :', (event.target as HTMLInputElement).className);
    }
    

}
