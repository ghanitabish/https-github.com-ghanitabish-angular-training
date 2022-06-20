import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/*import { MatDialog } from '@angular/material/dialog';*/
import { interval, Observable, of, Subscription } from 'rxjs';
import { tap, map, filter, mergeMap, switchMap } from 'rxjs/operators';
/*import { MyDialogComponent } from './components/my-dialog/my-dialog.component';*/
import { ChildMessageService } from './services/child-message.service';
import { UserlistService } from './services/userlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training-practice';
}
