import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public routes: string[] = ['rota1', 'rota2', 'rota3', 'rota4'];

  constructor() { }

  ngOnInit(): void {
  }

  goToRoute(x: string){
    console.log(x)
  }

}
