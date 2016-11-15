import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import {isAndroid} from "platform"

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
  // Get the event sender
  let page = <Page>args.object;
  page.bindingContext = new HelloWorldModel();
}

// export function buttonLoaded(args){
//   if(isAndroid){
//     args.object.android.setStateListAnimator(null);
//   }
  
// }