import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '../../node_modules/@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicImageLoader } from 'ionic-image-loader';

import { MyApp } from './app.component';
import { SuperTabsController,SuperTabsModule } from 'ionic2-super-tabs';

//Angularfire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

//Pages
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';

//Providers
import { FireProvider } from '../providers/fire/fire';
import { UtilProvider } from '../providers/util/util';

//Ionic Native
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Firebase } from '@ionic-native/firebase';
import { Facebook } from '@ionic-native/facebook';
import { Sim } from '@ionic-native/sim';
import { HeaderColor } from '@ionic-native/header-color';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { CallNumber } from '@ionic-native/call-number'
import { GoogleMaps } from "@ionic-native/google-maps";
import { File } from '@ionic-native/file';


const config = {
      apiKey: "AIzaSyBicF0oeyGcCQ5sr8QvNsjg6qphf0Dmjio",
      authDomain: "hero-burguer.firebaseapp.com",
      databaseURL: "https://hero-burguer.firebaseio.com",
      projectId: "hero-burguer",
      storageBucket: "hero-burguer.appspot.com",
      messagingSenderId: "988738797804"
    };

@NgModule({
declarations: [
  MyApp
],
imports: [
  BrowserModule,
  SuperTabsModule.forRoot(),
  IonicModule.forRoot(MyApp),
  AngularFireModule.initializeApp(config),
  AngularFireDatabaseModule,
  AngularFirestoreModule,
  AngularFireAuthModule,
  ReactiveFormsModule,
  HttpModule,
  HttpClientModule,
  IonicImageLoader.forRoot()
],
bootstrap: [IonicApp],
entryComponents: [
  MyApp
],
providers: [
  File,
  StatusBar,
  SplashScreen,
  SuperTabsController,
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  UtilProvider,
  GoogleMaps,
  HeaderColor,
  ScreenOrientation,
  CallNumber,
  Firebase,
  FireProvider,
  Facebook,
  Sim,
]
})
export class AppModule {}
