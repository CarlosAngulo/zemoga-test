import { Component, OnInit } from '@angular/core';
import { VoteBoardService } from './vote-board.service';
import { PublicFigure } from '../shared/public-figure.interface';

@Component({
  selector: 'app-vote-board',
  templateUrl: './vote-board.component.html',
  styleUrls: ['./vote-board.component.scss']
})
export class VoteBoardComponent implements OnInit {

  figures: PublicFigure[];

  constructor( private voteService: VoteBoardService) {
  }

  ngOnInit() {
    this.voteService.getFigures().subscribe( res => this.figures = res );
  }

}
