import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'playground-content',
  templateUrl: './template/default-home.template.html'
})


export class DefaultHomeComponent implements OnInit {

  error: any;
  constructor(private router: Router) {}
  ngOnInit () {

  }
}
