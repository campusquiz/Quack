import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../../pages/chat/chat';
import { Events } from 'ionic-angular';

/**
 * Generated class for the MatchFoundComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'match-found',
  templateUrl: 'match-found.html'
})
export class MatchFoundComponent {

  text: string;
  @Input() public matchedUser = {};
  @Input() public user = {};
  constructor( public navCtrl: NavController, public events: Events) {

  }

  onStartChat(id) {
    this.events.publish('modeChange', 0);
    this.navCtrl.push(ChatPage, id);
  }
}
