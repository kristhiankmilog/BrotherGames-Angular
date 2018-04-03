import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-accept-page',
  templateUrl: './code-accept-page.component.html',
  styleUrls: ['./code-accept-page.component.css']
})
export class CodeAcceptPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  myEvent(event) {
    this.router.navigate(['/listexChanges']);
  }

}