import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {GooglePlus} from '@ionic-native/google-plus/ngx'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IonicStorageModule} from '@ionic/storage';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {Network} from '@ionic-natve/Network/ngx;
import {Toast} from @'ionic-native/Toast/ngx;
import {AngularFireDatabaseModule} from '@angular/fire/database';

import {firebaseConfig} from '../config';

import { FeedbackModalPage } from './feedback-modal/feedback-modal.page';
import { PhoneModalPage } from './phone-modal/phone-modal.page';
import { MessageModalPage } from './message-modal/message-modal.page';
import { FormsModule } from '@angular/forms';

import { FeedbackModalPageModule } from './feedback-modal/feedback-modal.module';
import { PhoneModalPageModule } from './phone-modal/phone-modal.module';
import { MessageModalPageModule } from './message-modal/message-modal.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [FeedbackModalPage,PhoneModalPage,MessageModalPage],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FeedbackModalPageModule,
    PhoneModalPageModule,
    MessageModalPageModule,
    IonicStorageModule.forRoot({
      name: 'stayawaydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
  }),AngularFireModule.initializeApp(firebaseConfig.fire,)],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Network,
    Toast,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
