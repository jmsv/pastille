import { Component, Input } from '@angular/core';

interface IDataItem {
  name: string;
  value: number;
  color: string;
}

@Component({
  selector: 'lib-pastille',
  templateUrl: './pastille.component.html',
  styleUrls: ['./pastille.component.css']
})
export class PastilleComponent {
  @Input() data: IDataItem[] = [];
}
