import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(ngModelObj) {
    console.log(ngModelObj);
  }
  contactMethods: Object[] = [
    {id: 1, name: "Football"},
    {id: 2, name: "Tennis"},
    {id: 3, name: "Karate"},
    {id: 4, name: "Xokkey"}
  ];
  selectMethod: Object[] = [
    {id: 1, name: "C++"},
    {id: 2, name: "Python"},
    {id: 3, name: "Javascript"},
    {id: 4, name: "Nodejs"}
  ];
  onSubmit() {
    console.log("Muvaffaqiyatli yuborildi.");
  }

}
