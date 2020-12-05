import {Component, Input, OnInit} from '@angular/core';
import { Forfaits } from '../forfaits';
import { TabForfaits } from '../mock-forfaits';

@Component({
  selector: 'app-prix-forfait',
  templateUrl: './prix-forfait.component.html',
  styleUrls: ['./prix-forfait.component.css']
})
export class PrixForfaitComponent implements OnInit {
  tabforfait: Forfaits[] = TabForfaits;
  @Input() prix: any;
  @Input() rabais: any;
  constructor() { }

  ngOnInit(): void {
  }

}
