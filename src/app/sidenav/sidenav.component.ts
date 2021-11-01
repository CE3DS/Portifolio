import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() darkTheme = new EventEmitter;

  darkTheme_: boolean = true;

  public routes: string[] = ['Sobre Mim', 'Skills', 'Trabalhos', 'Outros'];

  constructor() { }

  ngOnInit(): void {
  }

  goToRoute(x: string) {
    console.log(x)
  }

  changeTheme() {
    this.darkTheme_ = !this.darkTheme_;
    this.darkTheme.emit(this.darkTheme_);
  }

  expandRouteDesc() {
    console.log('expand')
    var routeDesc = document.getElementsByClassName("route");
    for (var desc of routeDesc) {
      desc.classList.add('expandRouteDesc');
      desc.classList.remove('contractRouteDesc');
    }
  }

  contractRouteDesc() {
    console.log('contract')
    var routeDesc = document.getElementsByClassName("route");
    for (var desc of routeDesc) {
      desc.classList.add('contractRouteDesc')
      desc.classList.remove('expandRouteDesc');

    }
  }
}
