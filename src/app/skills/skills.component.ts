import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public gridCols: any = 6;
  public containerClass!: string[];
  constructor() { }

  ngOnInit(): void { 
    this.gridCols = (window.innerWidth <= 650) ? 4 : 6;
  }

  onResize(event: any) {
    this.gridCols = (event.target.innerWidth <= 650) ? 4 : 6;
  }
}
