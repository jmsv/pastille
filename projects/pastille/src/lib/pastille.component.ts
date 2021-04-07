import { Component, Input, OnInit } from '@angular/core';

interface IDataItem {
  name: string;
  value: number;
  color?: string;
}

interface IOptionsObject {
  height?: string;
  defaultColor?: string;
}

@Component({
  selector: 'lib-pastille', // TODO: Change this to follow naming conventions
  templateUrl: './pastille.component.html',
  styleUrls: ['./pastille.component.css']
})
export class PastilleComponent implements OnInit {
  @Input() data: IDataItem[] = [];
  @Input() options: IOptionsObject = {};

  private defaultOptions: IOptionsObject = {
    height: '40px',
    defaultColor: '#cfd8dc'
  };

  ngOnInit() {
    Object.assign(this.options, this.defaultOptions);

    this.data.forEach(d => {
      d.color = d.color || this.options.defaultColor;
    });
  }
}
