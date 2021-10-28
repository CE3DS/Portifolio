import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

  
}


