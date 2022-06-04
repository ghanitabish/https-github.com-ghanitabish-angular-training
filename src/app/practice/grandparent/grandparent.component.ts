import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.scss'],
})
export class GrandparentComponent implements OnInit {
  msgFromChild = '';
  constructor() {}

  ngOnInit(): void {}

  childPlayingFromParentHandler(event: string) {
    console.log('Message from child to parent to grandparent: ' + event);
    this.msgFromChild = event;
  }
}
