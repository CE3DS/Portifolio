import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public gridSize: any;
  public tileClassList: string[] = [];
  public windowSmall: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.gridSize = (window.innerWidth <= 1200) ? 1 : 2;
    this.windowSmall = (window.innerWidth <= 750) ? true : false;
    window.innerWidth <= 1200 ? this.tileClassList = ['tileRouter'] : this.tileClassList = [];
  }

  onResize(event: any) {
    this.gridSize = (event.target.innerWidth <= 1200) ? 1 : 2;
    this.windowSmall = (window.innerWidth <= 750) ? true : false;
    event.target.innerWidth <= 1200 ? this.tileClassList = ['tileRouter'] : this.tileClassList = [];
  }

  changeTheme(event: any) {
    var element = document.getElementsByClassName("mainContainer");
    if (!event) {
      element[0].classList.remove("darkTheme");
      element[0].classList.add("lightTheme");
    }
    else {
      element[0].classList.remove("lightTheme");
      element[0].classList.add("darkTheme");
    }
  }
}


