import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-covid',
  templateUrl: './dialog-covid.component.html',
  styleUrls: ['./dialog-covid.component.css']
})
export class DialogCovidComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {
  }

}
