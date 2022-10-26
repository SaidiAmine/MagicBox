import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstHomeComponent } from './first-home/first-home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, DataGridComponent, NavigationComponent, FirstHomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
