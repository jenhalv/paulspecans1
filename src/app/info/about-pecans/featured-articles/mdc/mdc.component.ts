import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdc',
  templateUrl: './mdc.component.html',
  styleUrls: ['./mdc.component.scss']
})
export class MdcComponent implements OnInit {

  CARDS = [
    {
      closed: false
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
