import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public stats = [
    {
      name: 'Downloaded',
      value: 50,
      color: '#8bc34a'
    },
    {
      name: 'Failed',
      value: 30,
      color: '#f44336'
    },
    {
      name: 'Not downloaded',
      value: 20,
      color: '#cfd8dc'
    }
  ];

  ngOnInit() {
    const changeStuff = () => {
      const dl = Math.round(40 + Math.random() * 20);
      const f = Math.round(10 + Math.random() * 10);

      this.stats[0].value = dl;
      this.stats[1].value = f;
      this.stats[2].value = 100 - dl - f;
    };

    setInterval(changeStuff, 1500);
    changeStuff();
  }
}
