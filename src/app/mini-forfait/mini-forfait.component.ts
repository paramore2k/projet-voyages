import { Component, OnInit } from '@angular/core';
import { Forfaits } from '../forfaits';
import { TabForfaits } from '../mock-forfaits';

@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css'],
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #ff1e1e;
    }
  `]
})
export class MiniForfaitComponent implements OnInit {
  tabforfait: Forfaits[] = TabForfaits;
  readonly = true;
  constructor() { }

  ngOnInit(): void {
  }

}
