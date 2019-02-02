import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  toggleState = "open";
  constructor() { }

  ngOnInit() {
  }

  toggleSideNav() {
    if(this.toggleState === "closed") {
      document.getElementById("side-nav").style.width = "15%";
      document.getElementById("main").style.marginLeft = "15%";
      this.toggleState = "open";
    } else {
      document.getElementById("side-nav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      this.toggleState = "closed";
    }    
  }
}
