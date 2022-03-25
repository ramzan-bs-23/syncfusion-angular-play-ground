import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DropDownListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
