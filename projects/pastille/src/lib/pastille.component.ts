import { Component, Input, OnInit } from '@angular/core';

interface IDataItem {
  name: string;
  value: number;
  color: string;
}

interface IOptionsObject {
  height?: number;
}

@Component({
  selector: 'lib-pastille',
  templateUrl: './pastille.component.html',
  styleUrls: ['./pastille.component.css']
})
export class PastilleComponent implements OnInit {
  @Input() data: IDataItem[] = [];
  @Input() options: IOptionsObject = {};

  ngOnInit() {
    Object.assign({
      height: 40
    }, this.options)
  }
}
