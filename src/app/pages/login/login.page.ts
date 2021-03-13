import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    username: '',
    password: '',
  };

  constructor(
    private router: Router,
    public alertController: AlertController,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  login = async () => {
    if (this.user.username === '' || this.user.password === '') {
    } else {
      const url = 'https://bhdleon-interview-test.herokuapp.com/login';
      let body = {
        username: this.user.username,
        password: this.user.password,
      };
      this.dataService.post(url, body).subscribe(
        (data) => {
          this.user.username = '';
          this.user.password = '';
          if (data['token'] != undefined) {
            //this.saveCredentials();
            this.router.navigate(['/tabs']);
          }
        },
        (error) => {
          if (error['status'] === 401) {
            this.presentIncorrectDataAlert();
          } else {
            this.presentServerErrorAlert();
          }
        }
      );
    }
  };

  async presentIncorrectDataAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'El usuario o la contraseña son incorrectos',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.user.username = '';
            this.user.password = '';
          },
        },
      ],
    });

    await alert.present();
  }

  async presentServerErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Tenemos problemas. Inténtalo más tarde',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.user.username = '';
            this.user.password = '';
          },
        },
      ],
    });

    await alert.present();
  }
}
