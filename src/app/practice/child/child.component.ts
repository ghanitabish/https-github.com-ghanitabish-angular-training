import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChildMessageService } from 'src/app/services/child-message.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() value = '';
  @Output() childPlaying = new EventEmitter<string>();

  constructor(public childMessageService: ChildMessageService) {
    this.childMessageService.messageFromChild =
      'This is a message from child component';
  }

  ngOnInit(): void {}

  btnClickHandler() {
    console.log('ChildComponent: btnClickHandler()');
    this.childPlaying.emit('Playing Child Called!!');
  }
}
