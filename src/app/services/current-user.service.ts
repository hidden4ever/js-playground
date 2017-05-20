import { Injectable,EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';




@Injectable()
export class CurrentUserService extends EventEmitter<any> {
  currentUser:any = false;

  constructor() {
    super()
  }

  /**
   * Returns the id of the currently logged in User
   * Returns false if no user is logged in
   * @returns {any}
   */
  getCurrentUser(): Promise<any> {
    var self=this;

    return new Promise<any>((resolve, reject) => {
      setTimeout(()=>resolve(self.currentUser), environment.latency?environment.latency:200);
    });
  }

}
