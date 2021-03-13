import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardItemComponent } from './card-item/card-item.component';
import { DetailedCardItemComponent } from './detailed-card-item/detailed-card-item.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';

@NgModule({
  declarations: [
    CardItemComponent,
    DetailedCardItemComponent,
    TransactionsListComponent,
  ],
  exports: [
    CardItemComponent,
    DetailedCardItemComponent,
    TransactionsListComponent,
  ],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
