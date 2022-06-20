import { Component, OnInit } from '@angular/core';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'at-pong',
  templateUrl: './pong.component.html',
  styleUrls: ['./pong.component.scss'],
})
export class PongComponent implements OnInit {
  delayed = false;

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.msgSubject.subscribe((msg) => {
      console.log(msg);
    });

    setTimeout(() => {
      this.delayed = true;
    }, 10000);
  }
}
