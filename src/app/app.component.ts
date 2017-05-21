import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';



//Vendor Modules
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

//App Modules and components
import {DefaultHomeComponent} from "./defaultHome.component";
import {CurrentUserService} from './services/current-user.service';

//Events
import {startLoadingMessage,completeLoadingMessage,successNotification,errorNotification,alertNotification,warnNotification,infoNotification} from './events/events';
import {MessageBus} from "./services/message-bus.service";
import {PlaygroundNotifications} from "./components/playground-notifications"


@Component({
  selector: 'playground-root',
  templateUrl: 'template/app.template.html',

})

/**
 * Root class for App component .
 */
export class AppComponent implements OnInit {

  private title = 'Playground';
  private currentUser:any = "";
  private message = "Please wait while the app initializes...."


  ngOnInit () {
    let self=this;

    self.currentUserService.getCurrentUser().then(
      (currentUser)=>{
        self.currentUser = currentUser;
        self.message = null;


        if (false ==  self.currentUser){
          //User was not found
          self.loadHome(false);
          //Publish the loading message to message bus
        }
        else{
          self.loadHome(true);
        }

        self.msgBus.publish(new completeLoadingMessage());
        
      }
    ).catch(
      // Log the rejection reason
      (reason) => {
        self.message= "Error Occurred trying to load the application. "
      });


    //Publish the loading message to message bus
    self.msgBus.publish(new startLoadingMessage(self.message))
  }

  /**
   * Set up the current User Service
   * @param currentUserService
   */
  constructor(private currentUserService: CurrentUserService
    ,private slimLoadingBarService: SlimLoadingBarService
    ,private router: Router
    ,private msgBus:MessageBus
  ) {

    let self=this;

    //Start the loading bar
    this.msgBus.listenFor(startLoadingMessage)
      .subscribe(startLoadingMessage => {
        self.message = startLoadingMessage.message;
        self.slimLoadingBarService.start(() => { });
      });

    //Complete the loading bar
    this.msgBus.listenFor(completeLoadingMessage)
      .subscribe(completeLoadingMessage => {
        self.message = null;
        self.slimLoadingBarService.complete();
      });

  }

  ngOnDestroy() {
    //Destroy the listens ?? @todo
  }


  /**
   * Load the homepage
   */
  loadHome(isUserExists:boolean){
    console.log("Loading home "+isUserExists);
    if(isUserExists){
      //User is logged in. Move to dashboard
      this.router.navigate(['/dashboard']);
    }
    else{
      //User is not logged in. Show default Home page
      this.router.navigate(['/home']);
    }
  }
}
