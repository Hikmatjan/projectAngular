import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'darslar/:id/:title', component: LessonsComponent}, //parametrli route
  {path: 'darslar', component: LessonsComponent},
  {path: 'contactForm', component: ContactFormComponent},
  {path: '**', component: PageNotFoundComponent}
];

import { AppComponent } from './app.component';
import { LessonsComponent } from './lessons.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonsService } from './lessons.services';                      
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LessonComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavbarComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
