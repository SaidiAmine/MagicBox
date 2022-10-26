import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './first-home/hello/hello.component';
import { DataGridComponent } from './first-home/data-grid/data-grid.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstHomeComponent } from './first-home/first-home.component';
import { RouterModule } from '@angular/router';

@NgModule({ // add RouterModule.forRoot([]) once routin added
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, RouterModule.forRoot([]) ],
  declarations: [ AppComponent, HelloComponent, DataGridComponent, NavigationComponent, FirstHomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
