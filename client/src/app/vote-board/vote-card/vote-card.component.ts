import { Component, OnInit, Input } from '@angular/core';
import { PublicFigure } from '../../shared/public-figure.interface';

@Component({
  selector: 'app-vote-card',
  templateUrl: './vote-card.component.html',
  styleUrls: ['./vote-card.component.scss']
})
export class VoteCardComponent implements OnInit {

  @Input() cardData: PublicFigure;

  up = 0;
  down = 0;

  constructor() { }

  ngOnInit() {
    const total = this.cardData.votes.up + this.cardData.votes.down;
    this.up =  this.cardData.votes.up * 100 / total;
    this.down =  this.cardData.votes.down * 100 / total;
  }

}
