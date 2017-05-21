import { Component, OnInit } from '@angular/core';
import {MessageBus} from "../services/message-bus.service";
import {NotificationsService} from 'angular2-notifications';
//Events
import {successNotification,errorNotification,alertNotification,warnNotification,infoNotification} from '../events/events';


@Component({
  selector: 'playground-notifications',
  templateUrl: '../template/playground-notifications.template.html'
})


export class PlaygroundNotifications implements OnInit {
  //@see :https://jaspero.co/resources/projects/ng-notifications
  notificationOptions = {
    position: ["bottom", "right"],
    lastOnBottom: true,
    timeOut: 4000,
    showProgressBar: false,
    pauseOnHover: false,
    clickToClose: false
  }


  constructor(private notificationService:NotificationsService
    ,private msgBus:MessageBus) {

    var self=this;

    this.msgBus.listenFor(successNotification)
      .subscribe(successNotification=>{
        this.notificationService.success(
          successNotification.title,
          successNotification.content,
          self.notificationOptions
        )
      });
    this.msgBus.listenFor(errorNotification)
      .subscribe(errorNotification=>{
        this.notificationService.error(
          errorNotification.title,
          errorNotification.content,
          self.notificationOptions
        )
      });

    this.msgBus.listenFor(alertNotification)
      .subscribe(alertNotification=>{
        this.notificationService.alert(
          alertNotification.title,
          alertNotification.content,
          self.notificationOptions
        )
      });

    this.msgBus.listenFor(warnNotification)
      .subscribe(warnNotification=>{
        this.notificationService.warn(
          warnNotification.title,
          warnNotification.content,
          self.notificationOptions
        )
      });

    this.msgBus.listenFor(infoNotification)
      .subscribe(infoNotification=>{
        this.notificationService.info(
          infoNotification.title,
          infoNotification.content,
          self.notificationOptions
        )
      });
  }

  ngOnDestroy() {
    //Destroy the listens ?? @todo
  }
  ngOnInit () {}
}
