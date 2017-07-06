import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  host: {
        '(window:scroll)': 'updateHeader($event)'
    }
})

export class HomeComponent implements OnInit {
  
    isScrolled = false;
    currPos: Number = 0;
    startPos: Number = 0;
    changePos: Number = 100;

  constructor() { }

  ngOnInit() {
      jobOpening: any[] = [
    {
      "eventName": "Title",      
      "address":"First Line",
      "place":"Second Line",
      "date":"Date",
      "link":"http://manajitpal.online"

    },
    {
      "eventName": "Title",      
      "address":"First Line",
      "place":"Second Line",
      "date":"Date",
      "link":"http://manajitpal.online"
    },
    {
      "eventName": "Title",      
      "address":"First Line",
      "place":"Second Line",
      "date":"Date",
      "link":"http://manajitpal.online"
    },
    {
      "eventName": "Title",      
      "address":"First Line",
      "place":"Second Line",
      "date":"Date",
      "link":"http://manajitpal.online"
    },
    {
      "eventName": "Title",      
      "address":"First Line",
      "place":"Second Line",
      "date":"Date",
      "link":"http://manajitpal.online"
    }
  ];
  }

  updateHeader(evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if(this.currPos >= this.changePos ) {
            this.isScrolled = true;
        } else {
            this.isScrolled = false;
        }
    }
    

}
