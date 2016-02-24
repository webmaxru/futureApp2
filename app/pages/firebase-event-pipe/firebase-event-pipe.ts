import {Page, NavController} from 'ionic-framework/ionic';
import {FirebaseEventPipe} from '../../firebasepipe/firebasepipe';

@Page({
  templateUrl: 'build/pages/firebase-event-pipe/firebase-event-pipe.html',
  pipes: [FirebaseEventPipe]
})
export class FirebaseEventPipePage {

  private firebaseUrl: string;
  private postsRef;

  constructor() {
    this.firebaseUrl = 'https://futureapp2.firebaseio.com/posts';
    this.postsRef = new Firebase(this.firebaseUrl);
  }

  onKeyUp($event, nameInput, messageInput) {
    if ($event.which === 13 && messageInput.value) {
      this.createPost(nameInput, messageInput);
    }
  };

  createPost(nameInput, messageInput) {

    this.postsRef.push({
      name: nameInput.value,
      message: messageInput.value
    });

    messageInput.value = null;
  };


}
