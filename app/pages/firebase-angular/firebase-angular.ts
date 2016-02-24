import {Page, NavController} from 'ionic-framework/ionic';
import {FirebaseService, FirebaseServiceFactory} from 'firebase-angular2/core';
import {Observable} from 'rxjs/Observable';
import { provide } from 'angular2/core';

/*
  Generated class for the FirebaseAngularPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/firebase-angular/firebase-angular.html',
  providers: [provide(FirebaseService, { useFactory: () => new FirebaseService(new Firebase('https://futureapp2.firebaseio.com/posts-alt/')) })]
})
export class FirebaseAngularPage {

  private firebase: FirebaseService;

    posts: Observable<any>;

    constructor(firebase: FirebaseService) {
       this.firebase = firebase;
    }

    observeData() {
       this.posts = this.firebase.asArray();
    }

    ngOnInit() {
       this.observeData();
    }

}
