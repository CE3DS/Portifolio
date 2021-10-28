import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";

// Em caso de adição de rotas, adicionar também ao routes em app.component.ts
const appRoutes: Routes = [
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about-me'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
