import { Component, OnChanges, Output, SimpleChanges, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnChanges{
  @Output() inc = new EventEmitter<number>();
  myCount = 0;
  interval;
  incStart(){
    this.interval = setInterval(() => {
      this.inc.emit(this.myCount);
      this.myCount++;
      console.log(this.myCount);
    }, 1000)
  }

  incEnd(){
    clearInterval(this.interval)
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    // changed objects
    console.log(changes);
  }
  
}
