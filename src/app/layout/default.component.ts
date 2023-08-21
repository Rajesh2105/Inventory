import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
