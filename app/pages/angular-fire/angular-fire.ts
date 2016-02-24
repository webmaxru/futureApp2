import {Page, NavController} from 'ionic-framework/ionic';
import {Observable} from 'rxjs/Observable';

import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

/*
  Generated class for the AngularFirePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/angular-fire/angular-fire.html',

  providers: [FIREBASE_PROVIDERS, defaultFirebase('https://futureapp2.firebaseio.com')]
})
export class AngularFirePage {

  questions: Observable<any>

  constructor(af: AngularFire) {
    // Get an observable of a synchronized array from <firebase-root>/questions
    this.questions = af.list('/posts');


  }

}
