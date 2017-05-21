
interface iEventType {
  eventCode: string;
  eventMessage:string;
  data: any;
}

class baseMessage implements  iEventType {
  eventCode = "UNKNOWN_CODE";
  eventMessage = "";
  data = null;

}
/**
 * Start the loading bar
 */
export class startLoadingMessage extends baseMessage implements iEventType{
  eventCode = "LOADING_STARTED";
  eventMessage = "";
  public message :string =  "Loading";

  constructor(message:string) {
     super();
     this.message = message;
  }
}

/**
 * Stop the loading bar
 */
export class completeLoadingMessage extends baseMessage implements iEventType{
  eventCode = "LOADING_COMPLETED";
  eventMessage = "";
}

/**
 * Notification messages
 */
export class baseNotification extends  baseMessage implements iEventType{
  title:string;
  content:string;
  constructor(title,content,eventCode=null,eventMessage=null){
    super();
    this.title = title;
    this.content = content;
    this.eventMessage = eventMessage?eventMessage : content
    this.eventCode = eventCode?eventCode:this.eventCode;
  }
}
export class successNotification extends  baseNotification implements iEventType{}
export class errorNotification extends  baseNotification implements iEventType{}
export class alertNotification extends  baseNotification implements iEventType{}
export class warnNotification extends  baseNotification implements iEventType{}
export class infoNotification extends  baseNotification implements iEventType{}
