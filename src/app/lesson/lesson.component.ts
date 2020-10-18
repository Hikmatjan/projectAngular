import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LessonInfo } from '../lesson-info';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  @Input() lesson: LessonInfo;
  @Output("changeTitle") titleChange = new EventEmitter<boolean>(); //titleChange hodisasini EventEmitter ga moslashtirish
 
  constructor() {
   
  } 

  ngOnInit(): void {
  }

  onPlusButtonClick() {
    this.titleChange.emit(true);
  }
  onMinusButtonClick() {
    this.titleChange.emit(false);
  }

}
 