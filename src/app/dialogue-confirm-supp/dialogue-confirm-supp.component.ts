import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Forfaits} from '../forfaits';
import { VoyagesService} from '../voyages.service';

@Component({
  selector: 'app-dialogue-confirm-supp',
  templateUrl: './dialogue-confirm-supp.component.html',
  styleUrls: ['./dialogue-confirm-supp.component.css']
})
export class DialogueConfirmSuppComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogueConfirmSuppComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  /* fonction pour canceller la demande de suppression */

  annuleSupp(): void{
    this.dialogRef.close();
  }

  suppForfait(forfais: Forfaits): void {
    this.dialogRef.close(forfais);
  }

}
