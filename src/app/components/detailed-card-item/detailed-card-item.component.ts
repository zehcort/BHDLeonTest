import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed-card-item',
  templateUrl: './detailed-card-item.component.html',
  styleUrls: ['./detailed-card-item.component.scss'],
})
export class DetailedCardItemComponent implements OnInit {
  @Input() card;

  constructor() {}

  ngOnInit() {}
}
