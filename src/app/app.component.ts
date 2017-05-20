import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';



//Vendor Modules
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

//App Modules and components
import {DefaultHomeComponent} from "./defaultHome.component";
import {CurrentUserService} from './services/current-user.service';

@Component({
  selector: 'playground-root',
  templateUrl: 'template/app.template.html',
  styleUrls: ['../styles/bundle.css'],
  viewProviders: [CurrentUserService]
})


export class AppComponent implements OnInit {

  private title = 'Playground';
  private currentUser:any = "";
  private message = "Please wait while the app initializes...."

  ngOnInit () {
    let self=this;

    self.currentUserService.getCurrentUser().then(
      (currentUser)=>{
        self.completeLoading("");
        self.currentUser = currentUser;
        self.message = null;


        if (false ==  self.currentUser){
          //User was not found
          self.loadHome(false);
        }
        else{
          self.loadHome(true);
        }
      }
    ).catch(
      // Log the rejection reason
      (reason) => {
        self.message= "Error Occured trying to load the application. "
      });

    self.startLoading("");
  }

  /**
   * Set up the current User Service
   * @param currentUserService
   */
  constructor(private currentUserService: CurrentUserService
    ,private slimLoadingBarService: SlimLoadingBarService
    ,private router: Router
  ) {
      //constructor
  }

  /**
   * Start loading bar
   */
  startLoading(event:string) {
    this.slimLoadingBarService.start(() => { });
  }

  /**
   * Stop Loading bar
   */
  completeLoading(event:string) {
    this.slimLoadingBarService.complete();
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
