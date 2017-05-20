//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Vendor Modules
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

//AppModules
import { AppComponent } from './app.component';
import {DefaultHomeComponent} from './defaultHome.component';
import { AppRoutingModule } from './app-routing.module';

//@todo : This needs to be removed for production
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SlimLoadingBarModule.forRoot(),
    AppRoutingModule
    // InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 }),

  ],
  exports: [BrowserModule, SlimLoadingBarModule],
  declarations: [
    AppComponent,

    DefaultHomeComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
