import { Component, OnInit } from '@angular/core';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'at-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.scss'],
})
export class PingComponent implements OnInit {
  constructor(public gameService: GameService) {}

  ngOnInit(): void {}
}
