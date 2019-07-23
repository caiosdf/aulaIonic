import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  constructor(public alertcontroller: AlertController, public toastController: ToastController) {}

  async alerta(){
  	const alert = await this.alertcontroller.create({
  		header: 'Irado!',
  		subHeader: '',
  		message: 'Gostaria de avaliar o filme ?',
  		buttons: ['Não','Sim']
  	});

  	await alert.present();
  }

  async presentToast(){
  	const toast = await this.toastController.create({
  		message: 'Filme adicionado na sua lista! :)',
  		duration: 2000
  	});

  	toast.present();
  }
}
