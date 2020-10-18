import { Component, OnInit } from '@angular/core';
import { LessonsService } from './lessons.services';
import { LessonInfo } from './lesson-info';
import { ActivatedRoute } from '@angular/router';

@Component({  
    selector: "lessons",
    //Componentimizni template ti ICHIDAGI HAMMASI DOM GA TEGISHLI
    template: `  
    <div class="container">
    <h1>{{ getTitle() }}</h1>

    <input type="text" (input)="onTextInput($event)">
    <button (click)="onGetEvents()">Button</button>
    <p class="text-primary mt-4">{{ userName }}</p>
    <input type="text" [(ngModel)]="user">
    <button class="ml-2" [class.btn]="isBtn" [class.btn-primary]="isBtnPrimary" (click)="onButtonClick()">Reset</button>
    <button class="ml-3 text-white" [style.backgroundColor]="isActive?'green':'yellow'">Tugma bosilsin</button>

    <div>
        <h3 *ngFor="let array of arrayList">
            {{ array.name }}
        </h3>
    </div>

    <img src="{{ imgSource }}">
    <img class="ml-3" [src] ="imgSource" *ngIf="showImage"> 

    <table>
        <tr>
            <td [attr.colspan]="colspanNumber">1</td>
        </tr>
    </table>

    <button class="btn" [ngStyle]="{'backgroundColor': isActive ? 'green' : 'yellow', 'color': isColor ? 'white' : 'green'}">Test</button>

    <button [ngClass]="{'btn': isBtn, 'btn-primary': isBtn}">Submit</button>


    <h1>Darslar ro'yxati:</h1>
    <ul style="list-style-type: none">
        <li *ngFor="let lesson of arrayLessons" (click)="onSelect(lesson)">
        <a [routerLink]="['/darslar',lesson.title]">{{ lesson.title }}</a>
        </li>
    </ul>

    </div>

    <app-lesson [lesson]="selectedLesson" (changeTitle)="onTitleChange($event)"></app-lesson>

    ` ,
    styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
    titleParam: string = '';
    title: string = "Darslar ro'yxati"; //Componentimizni malumoti

    getTitle(): string {
        return 'Sarlavha: ' + this.title; //COmponentimizni logikasi
    }
    //arrayLessons = ["Angular asoslari","Web API","MS SQL Server","Javascript asoslari"];
    arrayLessons: LessonInfo[];
    imgSource: string = "https://images.unsplash.com/photo-1579273166082-a8b7ed138d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60";

    constructor(private route: ActivatedRoute, lessonsSvc: LessonsService) {
        //let lessonsSvc = new lessonsService(); //buni bersak LessonsComponent lessonsService ga qaram bo'lib qoladi
        this.arrayLessons = lessonsSvc.getLessons();
    }
    ngOnInit(): void {
        //console.log(this.route);
        this.route.paramMap.subscribe((params) => {
            this.titleParam = params.get('title');
            this.getLessonByTitle();
        });
    }
    getLessonByTitle(): void {
        if (!!this.titleParam) {
            let lesson = this.arrayLessons.find((les) => {
                return les.title == this.titleParam;
            });
            this.onSelect(lesson);
        }
    }
    // tanlangan darsni saqlash un ishlatiladigan o'zgaruvchi
    selectedLesson: LessonInfo;

    onSelect(lesson: LessonInfo): void {
        this.selectedLesson = lesson;
    } 
    
    arrayList = [
        {id: 1, name: "Hikmat"},
        {id: 2, name: "Rajab"},
        {id: 3, name: "Shamshod"}
    ];

    onGetEvents() {
        return alert("Salom Hikmat");
    }
    userName;
    user: string = "Assalomu alaykum";
    onTextInput(event1: Event) {
        this.userName = event1.target;
        //this.userName = event1.target.value;
    }
    onButtonClick() {
        this.user = "";
    }
    colspanNumber: number = 2;
    isBtn: boolean = true;
    isBtnPrimary: boolean = true;
    isActive: boolean = false;
    isColor: boolean = true;
    showImage: boolean = true;

    onTitleChange(isPlus: boolean) {
        isPlus ? this.selectedLesson.title += "+" : this.selectedLesson.title += "-";
    }

}
