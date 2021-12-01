import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { route } from './route';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() darkTheme = new EventEmitter;

  darkTheme_: boolean = true;
  theme: string = "Dark";

  routeIconClass!: any[];
  routeListClass!: any[];

  // Icons disponíveis em: https://jossef.github.io/material-design-icons-iconfont/
  public routes: route[] = [
    { route: "about-me", description: "Sobre mim", matIcon: "person" },
    { route: "skills", description: "Skills", matIcon: "auto_awesome" },
    { route: "my-projects", description: "Meus projetos", matIcon: "backup_table" },
  ];

  constructor(public router: Router) { }

  ngOnInit(): void { }

  goToRoute(route: string) {
    this.router.navigate([route])
  }

  changeTheme() {
    this.theme == "Dark" ? this.theme = "Light" : this.theme = "Dark";

    this.darkTheme_ = !this.darkTheme_;
    this.darkTheme.emit(this.darkTheme_);
  }

  expandRouteDesc() {
    this.routeIconClass = ['expandRouteDesc']
    this.routeListClass = ['expandRouteDesc']
  }

  contractRouteDesc() {
    this.routeIconClass = ['contractRouteDesc']
    this.routeListClass = []
  }
}
