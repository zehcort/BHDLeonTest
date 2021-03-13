import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  cards: any = [];
  transactions: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getCards();
  }

  getCards = async () => {
    const url = 'https://bhdleon-interview-test.herokuapp.com/cards';
    this.dataService
      .get(
        url,
        '4cJ&PKTqSb0b3d94f92d91337842a406fffdff2df1207edbba86d06a2007693886239f371'
      )
      .subscribe(
        (data) => {
          this.cards = data;
          console.log(data[0]['productNumber']);
          this.getTransactions(data[0]['productNumber']);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  getTransactions = async (productNumber: string) => {
    const url =
      'https://bhdleon-interview-test.herokuapp.com/cards/movements/' +
      productNumber;
    this.dataService
      .get(
        url,
        '4cJ&PKTqSb0b3d94f92d91337842a406fffdff2df1207edbba86d06a2007693886239f371'
      )
      .subscribe(
        (data) => {
          this.transactions = data;
        },
        (error) => {
          console.log(error);
        }
      );
  };
}
