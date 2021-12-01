import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  public folderDecos!: any[];
  public date:Date = new Date();

  constructor() {
    this.folderDecos = [
      {text: 'modules', icon: 'folder', blankSpace: 0},
      {text: 'src', icon: 'folder_open', blankSpace: 0},
      {text: 'app', icon: 'folder_special', blankSpace: 1},
      {text: 'images', icon: 'snippet_folder', blankSpace: 2},
      {text: 'landing', icon: 'folder', blankSpace: 2},
      {text: 'models', icon: 'folder', blankSpace: 0},
      {text: 'config.json', icon: 'speaker_notes', blankSpace: 0},
      {text: 'README.md', icon: 'sticky_note_2', blankSpace: 0},
    ]
   }

  ngOnInit(): void {
  }

}
