import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public gridSize: any;
  public routes = ['about-me', 'skills'];

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.gridSize = (window.innerWidth <= 1200) ? 1 : 2;
  }

  onResize(event: any) {
    this.gridSize = (event.target.innerWidth <= 1200) ? 1 : 2;
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


