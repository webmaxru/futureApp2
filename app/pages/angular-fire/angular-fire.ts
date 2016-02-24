import {Page, NavController} from 'ionic-framework/ionic';
import {Observable} from 'rxjs/Observable';

import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

@Page({
  templateUrl: 'build/pages/angular-fire/angular-fire.html',
  providers: [FIREBASE_PROVIDERS, defaultFirebase('https://futureapp2.firebaseio.com')]
})
export class AngularFirePage {

  questions: Observable<any>

  constructor(af: AngularFire, private nav: NavController) {
    this.questions = af.list('/posts');
  }

}
