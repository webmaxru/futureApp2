import {Page, NavController} from 'ionic-framework/ionic';
import {FirebaseService, FirebaseServiceFactory} from 'firebase-angular2/core';
import { provide } from 'angular2/core';

@Page({
  templateUrl: 'build/pages/firebase-angular/firebase-angular.html',
  providers: [provide(FirebaseService, { useFactory: () => new FirebaseService(new Firebase('https://futureapp2.firebaseio.com/posts-alt/')) })]
})
export class FirebaseAngularPage {

  private firebase: FirebaseService;

    posts: any;

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
