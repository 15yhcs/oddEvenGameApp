import { Component } from '@angular/core';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oddEvenGameApp';
  displayCount;
  odd;
  oddArr: number[] = [];
  evenArr: number[] = []
  triggerStart(cur: number){
    this.displayCount = cur;
    this.getStatus();
  }
  getStatus(){
    this.odd = true ? this.displayCount % 2 != 0 : false;
    this.pushArr()
  }

  pushArr(){
    if(this.odd === true){
      this.oddArr.push(this.displayCount);
    }
    else{
      this.evenArr.push(this.displayCount);
    }
  }
}
