import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  card;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    private dataService: DataService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.card = this.router.getCurrentNavigation().extras.state.card;
      }
    });
  }

  ngOnInit() {}

  payCard = async () => {
    const url = 'https://bhdleon-interview-test.herokuapp.com/cards/payment/';
    let body = {
      productNumber: this.card['productNumber'],
      amount: this.card['BalanceRD'],
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer ' +
        '4cJ&PKTqSb0b3d94f92d91337842a406fffdff2df1207edbba86d06a2007693886239f371',
    };
    this.dataService
      .post(
        url,
        '4cJ&PKTqSb0b3d94f92d91337842a406fffdff2df1207edbba86d06a2007693886239f371'
      )
      .subscribe(
        (data) => {
          if (data != undefined) {
            this.presentPaymentSuccessAlert();
          } else {
            this.presentPaymentErrorAlert;
          }
        },
        (error) => {
          this.presentPaymentErrorAlert;
        }
      );
  };

  async presentPaymentSuccessAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Pago exitoso',
      message: 'El pago de tu tarjeta se ha realizado con éxito',
      buttons: ['Cerrar'],
    });

    await alert.present();
  }

  async presentPaymentErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Pago no exitoso',
      message:
        'El pago de tu tarjeta no se ha podido realizar con éxito. Intente más tarde',
      buttons: ['Cerrar'],
    });

    await alert.present();
  }
}
