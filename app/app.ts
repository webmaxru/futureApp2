import {App, IonicApp, Platform} from 'ionic-framework/ionic';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {AngularFirePage} from './pages/angular-fire/angular-fire';
import {FirebaseAngularPage} from './pages/firebase-angular/firebase-angular';
import {FirebaseEventPipePage} from './pages/firebase-event-pipe/firebase-event-pipe';

import {enableProdMode} from 'angular2/core';
enableProdMode();

@App({
  templateUrl: 'build/app.html',
  config: {
    backButtonText: 'Tilbake',
    mode: 'md'
  },

})
class MyApp {
  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{ title: string, component: any }>;

  constructor(private app: IonicApp, private platform: Platform) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Angular Fire', component: AngularFirePage },
      { title: 'Firebase Angular2', component: FirebaseAngularPage },
      { title: 'Firebase Event Pipe', component: FirebaseEventPipePage },

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.app.getComponent('leftMenu').close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
