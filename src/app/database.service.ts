import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { AlertController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase,public alertController: AlertController, private toast: Toast) { }

  async presentAlertSuccess() {
    const alert = await this.alertController.create({
      header: 'Message',
      message: 'Thank you for helping us grow.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertError() {
    const alert = await this.alertController.create({
      header: 'Message',
      message: 'Looks like we are facing some network issue. Try again.',
      buttons: ['OK']
    });

    await alert.present();
  }
  
  
  private messageURL  = this.db.list('/messages/');
  private phoneURL  = this.db.list('/numbers/');
  private feedbackURL  = this.db.list('/feedback/');

  async addMessage(list): Promise<void> {
       // get item key
       let fetchKey = this.messageURL.push(list)['path']['pieces_'][1];
       list.key = fetchKey;
       await this.messageURL.update(list.key, list).then((data) => {
        this.presentToast('Message has been successfully added.');
     }).catch((error) => {
       console.log('df00');
      this.presentToast('We are facing some issues.');
     });
  }

  async addNumber(list): Promise<void> {
       // get item key
       let fetchKey = this.phoneURL.push(list)['path']['pieces_'][1];
       list.key = fetchKey;
       await this.phoneURL.update(list.key, list).then((data) => {
        this.presentToast('Number has been successfully added.');
     }).catch((error) => {
       console.log('df00');
      this.presentToast('We are facing some issues.');
     });
  }

  async addFeedback(list): Promise<void> {
       await this.feedbackURL.push(list).then((data) => {
          this.presentToast('Thank you for your feedback.');
       }).catch((error) => {
         console.log('df00');
        this.presentToast('We are facing some issues.');
       });
  }

  async phoneSpamCount(list, key): Promise<void> {
       await this.phoneURL.update(key, list).then((data) => {
          this.presentAlertSuccess();
       }).catch((error) => {
          this.presentAlertError();
       });
  }

  async phoneNonSpamCount(list, key): Promise<void> {
    try {
       await this.phoneURL.update(key, list).then((data) => {
          this.presentAlertSuccess();
      }).catch((error) => {
          this.presentAlertError();
      });
    } catch {
      console.log("erro")
    }
  }

  async messageSpamCount(list, key): Promise<void> {
       await this.messageURL.update(key, list).then((data) => {
          this.presentAlertSuccess();
       }).catch((error) => {
          this.presentAlertError();
       });
  }

  async messageNonSpamCount(list, key): Promise<void> {
        try {
       await this.messageURL.update(key, list).then((data) => {
          this.presentAlertSuccess();
      }).catch((error) => {
          this.presentAlertError();
      });
    } catch {
      console.log("erro")
    }
  }

  presentToast(message) {
    let toast = this.toast.show(message, '2000', 'bottom').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }
}
