import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderService } from './header.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './roba-sotto/home/home.component';
import { ListComponent } from './roba-sotto/list/list.component';
import { EditComponent } from './roba-sotto/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
