//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Vendor Modules
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { SimpleNotificationsModule } from 'angular2-notifications';



//AppModules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {DefaultHomeComponent} from './components/defaultHome.component';

//@todo : This needs to be removed for production
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {PlaygroundNotifications} from "./components/playground-notifications";
import {CurrentUserService} from "./services/current-user.service";
import {MessageBus} from "./services/message-bus.service";



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    SlimLoadingBarModule.forRoot(),
    SimpleNotificationsModule.forRoot(),

    AppRoutingModule
    // InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 }),

  ],
  exports: [BrowserModule, SlimLoadingBarModule],
  providers : [
    CurrentUserService,
    MessageBus
  ],
  declarations: [
    //Applications
    AppComponent,
    //Generic
    PlaygroundNotifications,

    //Specific components
    DefaultHomeComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
