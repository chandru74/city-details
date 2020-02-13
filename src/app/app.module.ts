import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDropdownModule } from'@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NgbModule, NgbDropdownModule, HttpClientModule, FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "Add Google API Key here"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
