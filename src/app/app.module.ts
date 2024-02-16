import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassCountComponent } from './shared/components/pass-count/pass-count.component';
import { PassCardComponent } from './shared/components/pass-card/pass-card.component';
import { PassListComponent } from './shared/components/pass-list/pass-list.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PassCountComponent,
    PassCardComponent,
    PassListComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
