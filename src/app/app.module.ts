import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DataGridComponent, NavigationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
