import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() card;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToDetailProduct() {
    let navigationExtras: NavigationExtras = { state: { card: this.card } };
    this.router.navigate(['/product'], navigationExtras);
  }
}
